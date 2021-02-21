import React, { Component, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { NavLink, withRouter, RouteComponentProps } from 'react-router-dom';

import { FiMail, FiLock } from 'react-icons/fi';
import { Button, Card } from '@material-ui/core';

import Input from '../Input'
import { Container, Content } from './styles';


import { IUser } from '../../store/ducks/users/types';
import store, { ApplicationState } from '../../store';

import * as UsersActions from '../../store/ducks/users/actions';
import * as LoginActions from '../../store/ducks/auth/actions';

interface StateProps {
  users: IUser[],
  login: IUser[],
}

interface DispatchProps {
  userActions:{getUsersRequest(): void},
  loginActions:{loginRequest(login:IUser[]): void}
}

type Props = StateProps & DispatchProps & RouteComponentProps

class SignIn extends Component<Props> {

  state = {
    email: '',
    password: '',
  }

  componentDidUpdate(prevProps:any, prevState:any) {
    if (prevProps.login !== this.props.login) {
      if(store.getState().login.isAuthUser) {

        const prevToken = localStorage.getItem('token')
        //@ts-ignore
        localStorage.setItem('token', this.props.login[0].authKey.access_token);
        //@ts-ignore
        localStorage.setItem('username', this.props.login[0].data[0].name);
        
        this.props.history.push("/home");

        if(!prevToken){window.location.reload();}
      }
    }
  }
  

  setEmail(e: any) {
    this.setState({ email: e.target.value });
  }

  setPassword(e: any) {
    this.setState({ password: e.target.value });
  }

  submit(e: any, login: IUser[]) {
    e.preventDefault();
    const { loginActions } = this.props;

    loginActions.loginRequest(login);

  }

  createAccount(e: any) {
    e.preventDefault();
  }

  isActiveVerf(email: string, password: string){
    if(email === '' || password === '') {
      return false
    } else {
      return true
    }
  }

  render() {
    const { email, password } = this.state;
    const loginObj: IUser[] = [{id:'', email: email, password: password, active: false, name:'', isAuthUser:false}];

    return (
      <Container className="container">
        <Card style={{width: "35%"}} variant="outlined">
          <Content className="content">
            <form>
              <h1>Faça seu login</h1>
              <Input
                className="email-input"
                icon={FiMail}
                name="email"
                value={email}
                onChange={(e) => this.setEmail(e)}
                placeholder="E-mail"
                autoComplete="false"
              />
              <Input
                icon={FiLock}
                name="password"
                value={password}
                onChange={e => this.setPassword(e)}
                type="password"
                placeholder="Senha"
              />
              <Button onClick={(e) => this.submit(e, loginObj)} 
                disabled={email === '' || password === ''}
                color="primary"
              >Entrar</Button>
              <ToastContainer position='bottom-center'/>
              <NavLink to="/signUp" className="link">
                <Button  color="primary" >Criar Conta</Button>
              </NavLink>
              <a href="forgot" className="link">Esqueci minha senha</a>
            </form>
          </Content>
        </Card>
      </Container>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  users: state.users.data,
  login: state.login.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    userActions: bindActionCreators(UsersActions, dispatch),
    loginActions:bindActionCreators(LoginActions, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignIn));
