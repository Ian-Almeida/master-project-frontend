import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router";

const AuthRoute = (props: any) => {

    const isAuthUser = (localStorage.getItem('isAuthUser') == 'true');
    
    let { type } = props;
    
    if (type === "guest" && isAuthUser) return <Redirect to="/home" />;
    else if (type === "private" && !isAuthUser) return <Redirect to="/" />;

    return <Route {...props} />;
};

const mapStateToProps = ({ isAuthUser }:any) => ({
    isAuthUser
  });

export default connect(mapStateToProps)(AuthRoute);