import React, { Component } from 'react';

import { Container, Button } from '@material-ui/core';

import { IUser } from '../../store/ducks/users/types';

import store, { ApplicationState } from "../../store";

import * as UsersActions from '../../store/ducks/users/actions';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

interface StateProps {
  users: IUser[]
}

interface DispatchProps {
  userActions:{getUsersRequest():void}
}

type Props = StateProps & DispatchProps;
class Home extends Component<Props> {

    print(e: any) {

      const {userActions} = this.props;  
      userActions.getUsersRequest();
        
    }
    
    render() {      
      return (
        <Container className="container">
          <Button onClick={(e) => this.print(e)}>Texto</Button>
        </Container>
      );
    }
  }

  const mapStateToProps = (state: ApplicationState) => ({
    users: state.users.data,
  });
  
  const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
      userActions: bindActionCreators(UsersActions, dispatch),
    }
  };

  export default connect(mapStateToProps, mapDispatchToProps)(Home);
  