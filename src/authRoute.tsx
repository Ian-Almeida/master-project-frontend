import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router";
import authHeaders from './authHeader';

const componentDidMount = () => {
  authHeaders();
}

const AuthRoute = (props: any) => {

  componentDidMount();

  const token = localStorage.getItem('token') ? localStorage.getItem('token') : false;
  let isAuthUser = false;
  
  if(token) {
    isAuthUser = true;
  }
   
  let { type } = props;
  
  if (type === "guest" && isAuthUser) return <Redirect to="/home" />;
  else if (type === "private" && !isAuthUser) return <Redirect to="/" />;
  return <Route {...props} />;
};

const mapStateToProps = ({ isAuthUser }:any) => ({
    isAuthUser
  });

export default connect(mapStateToProps)(AuthRoute);