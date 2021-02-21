import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import authHeaders from './authHeader';

import { Typography, Divider, AppBar } from "@material-ui/core";

import SignIn from './components/SignIn';
import NavBar from './components/NavBar';
import Home from './components/Home';
import SignUp from './components/SignUp';

import AuthRoute from './authRoute';

import store from './store';

const IndexPage = () => <div>
    <Typography variant="h3">Bem-Vindo ao App</Typography>
    <Divider style={{marginTop:10, marginBottom:10}} />
    <Typography variant="h6">De uma olhadinha</Typography>
</div>

// const componentDidMount = () => {
//   authHeaders();
// }
export default function App() {
  // componentDidMount()

    return (
      <Provider store={store}>
        <Router>
          <NavBar />
          <div className="container">
            <Switch>
              <AuthRoute path="/home" component={Home} type="private" />
              <AuthRoute path="/signUp" component={SignUp} type="guest"/>
              <AuthRoute path="/login" type="guest">
                <SignIn />
              </AuthRoute>
              <Route path="/" render={IndexPage} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
