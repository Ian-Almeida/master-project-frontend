import React, { Component, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { NavLink, withRouter, RouteComponentProps } from 'react-router-dom';

import { FiMail, FiLock } from 'react-icons/fi';
import { Button, Card, CardContent } from '@material-ui/core';
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
      if(store.getState().login.isAuthUser){
        this.props.history.push("/home", this.props.login[0]);
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
              {this.props.login.length}
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
              <Button  onClick={(e) => this.createAccount(e)} color="primary" >Criar Conta</Button>
              <a href="forgot">Esqueci minha senha</a>
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
  create: state.create.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    userActions: bindActionCreators(UsersActions, dispatch),
    loginActions:bindActionCreators(LoginActions, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignIn));
