import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router";

const AuthRoute = (props: any) => {
    let { type, isAuthUser } = props;

    if(props.location.state){
      isAuthUser = props.location.state.isAuthUser;
    }
    
    if (type === "guest" && isAuthUser) return <Redirect to="/home" />;
    else if (type === "private" && !isAuthUser) return <Redirect to="/" />;

    return <Route {...props} />;
};

const mapStateToProps = ({ isAuthUser }:any) => ({
    isAuthUser
  });

export default connect(mapStateToProps)(AuthRoute);