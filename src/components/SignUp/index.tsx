import React, { Component } from 'react'

import { 
    Container, 
    Card, 
    TextField,
    Grid, 
} from '@material-ui/core';

// import './SignUp.css';

import { Content } from './styles';

import {Button} from '@material-ui/core';

import { RouteComponentProps, withRouter, NavLink } from 'react-router-dom';

import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import store, { ApplicationState } from '../../store';

import { IUser, IUserCreate } from '../../store/ducks/users/types';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';

import * as UsersActions from '../../store/ducks/users/actions';
import * as LoginActions from '../../store/ducks/auth/actions';

interface StateProps {
    create: {data: IUser[], loading: boolean, error: boolean},
    login: IUser[],
  }

interface DispatchProps {
    userActions:{createUserRequest(user: IUserCreate): void},
    loginActions:{loginRequest(login:IUser[]): void}
}

type Props = StateProps & DispatchProps & RouteComponentProps

function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class SignUp extends Component<Props> {

    state = {
        email: '',
        password: '',
        password2: '',
        name: '',
        lastName: '',
        open: false,
        snackbarStatus: true,
        buttonEnabled: false,
    }

    componentDidUpdate(prevProps:any, prevState:any) {
        if(this.props.create !== prevProps.create) {
            if(this.props.create.error === true && prevProps.create.error !== true) {
                this.setState({snackbarStatus: false, open: true});
            } else if(this.props.create.data !== prevProps.create.data) {
                this.setState({snackbarStatus:true, open: true});

                const { loginActions } = this.props;

                const loginUser: IUser[] = [{
                    id: '',
                    email: this.state.email,
                    password: this.state.password,
                    active: false, 
                    name: '',
                    isAuthUser: false,
                }]
                loginActions.loginRequest(loginUser);
            }
        }

        if(prevProps.login !== this.props.login) {


            localStorage.setItem('isAuthUser', this.props.login[0].isAuthUser.toString());
            //@ts-ignore
            localStorage.setItem('token', this.props.login[0].authKey.access_token);
            localStorage.setItem('username', this.state.name.concat(' ', this.state.lastName));

            this.props.history.push("/home");
        }
    }    

    handleInputChange(e:any) {
        this.setState({[e.target.name]: e.target.value});
    }

    handleClose(e:any, reason?: string) {
        if(reason === 'clickaway') {
            return;
        }

        this.setState({open: false});
    }

    submit(e: any) {
        e.preventDefault();

        if(this.state.password === this.state.password2) {
            const user: IUserCreate = {
                email: this.state.email,
                password: this.state.password,
                name: this.state.name.concat(' ', this.state.lastName),
                active: true,
            }           

            this.props.userActions.createUserRequest(user);
        }
    }

    render() {

        const { email, password,
             password2, name, lastName, open,
              buttonEnabled, snackbarStatus } = this.state;
        
        const validatePassword = () => {
            if(password !== password2 || password === '' || password2 === '') {
                return true;
            }

            return false;
        }
        return (
            <Content>
            <Container className="root">
                <Card className="card" variant="outlined">
                    <Grid 
                    container direction="row" 
                    justify="center" 
                    alignItems="center"
                    spacing={1}
                    style={{minWidth: "50vh", maxWidth: "50hv"}}
                    >
                        <Grid item xs={12}>
                            <h1 className="title">Crie sua conta</h1>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField 
                                id="name-field"
                                className="leftField"
                                name="name"
                                label="Nome"
                                value={name}
                                onChange={(e) => this.handleInputChange(e)}
                                type="text"
                                variant="outlined"
                            ></TextField>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField 
                                id="last-name-field"
                                className="rightField"
                                name="lastName"
                                label="Sobrenome"
                                value={lastName}
                                onChange={(e) => this.handleInputChange(e)}
                                type="text"
                                variant="outlined"
                            ></TextField>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="email-field"
                                className="middleField"
                                name="email"
                                label="E-mail"
                                value={email}
                                onChange={(e) => this.handleInputChange(e)}
                                type="email"
                                variant="outlined"
                            ></TextField>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField 
                                error={validatePassword()}
                                id="password-field"
                                className="leftField"
                                name="password"
                                label="Senha"
                                value={password}
                                onChange={(e) => this.handleInputChange(e)}
                                type="password"
                                variant="outlined"
                            ></TextField>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField 
                                error={validatePassword()}
                                id="password2-field"
                                className="rightField"
                                name="password2"
                                label="Confirmar senha"
                                value={password2}
                                onChange={(e) => this.handleInputChange(e)}
                                type="password"
                                variant="outlined"
                            ></TextField>
                        </Grid>
                        <Grid item xs={12}>
                            <Button 
                                disabled={validatePassword()}
                                style={{marginLeft: "22vh"}}
                                className="submitButton" 
                                color="primary"
                                onClick={(e) => this.submit(e)}
                            >Enviar</Button>
                            <Snackbar open={open} autoHideDuration={6000} onClose={(e) => this.handleClose(e)}>
                                <Alert onClose={(e) => this.handleClose(e)} severity={snackbarStatus ? 'success' : 'error'}>
                                    Mensagem se sucesso!
                                </Alert>
                            </Snackbar>
                        </Grid>
                    </Grid>
                </Card>
            </Container>
            </Content>
        )
    }
}

const mapStateToProps = (state: ApplicationState) => ({
    create: state.create,
    login: state.login.data,
  });
  
  const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
      userActions: bindActionCreators(UsersActions, dispatch),
      loginActions: bindActionCreators(LoginActions, dispatch),
    }
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(SignUp);