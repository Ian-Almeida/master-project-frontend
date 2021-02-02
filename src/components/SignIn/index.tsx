import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { FiMail, FiLock } from 'react-icons/fi';
import { Button } from '@material-ui/core';
import Input from '../Input'
import { Container, Content } from './styles';
import ToastAnimated, { showToast } from '../Toast/index';

import { IUser, IUserCreate } from '../../store/ducks/users/types';
import { ILogin } from '../../store/ducks/auth/types';
import { ApplicationState } from '../../store';

import * as UsersActions from '../../store/ducks/users/actions';
import * as LoginActions from '../../store/ducks/auth/actions';

interface StateProps {
  users: IUser[],
  login: ILogin,
  create: IUser[],
}

interface DispatchProps {
  userActions:{getUsersRequest(): void},
  loginActions:{loginRequest(login:ILogin): void}
  // loginAcions: {loginRequest(login: ILogin): void}
  // getUsersRequest(): void,
  // loginRequest(login: ILogin): void,
  // createUserRequest(user: IUserCreate): any,
}

type Props = StateProps & DispatchProps

class SignIn extends Component<Props> {

  state = {
    email: '',
    password: '',
  }

  componentDidMount() {

  }

  setEmail(e: any) {
    this.setState({ email: e.target.value });
  }

  setPassword(e: any) {
    this.setState({ password: e.target.value });
  }

  submit(e: any, login: ILogin) {
    e.preventDefault();
    const { loginActions } = this.props;

    loginActions.loginRequest(login);
  }

  createAccount(e: any) {
    e.preventDefault();
    const { userActions } = this.props;
    userActions.getUsersRequest();

  }
  

  render() {
    const login: ILogin = this.state

    return (
      <Container className="container">
        <Content className="content">
          <form>
            <h1>Faça seu login</h1>
            <Input
              className="email-input"
              icon={FiMail}
              name="email"
              value={login.email}
              onChange={(e) => this.setEmail(e)}
              placeholder="E-mail"
              autoComplete="false"
            />
            <Input
              icon={FiLock}
              name="password"
              value={login.password}
              onChange={e => this.setPassword(e)}
              type="password"
              placeholder="Senha"
            />
            
            <Button className='formButton' onClick={(e) => this.submit(e, login)} 
              disabled={login.email === '' || login.password === ''}>Entrar
            </Button>
            <ToastContainer position='bottom-center'/>
            <Button className='formButton' onClick={(e) => this.createAccount(e)} color="primary" >Criar Conta</Button>
            <a href="forgot">Esqueci minha senha</a>
          </form>
        </Content>
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

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
