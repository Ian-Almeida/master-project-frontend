import React, { Component } from 'react';

import { Container, Button } from '@material-ui/core';

import store from "../../store";

class Home extends Component {

    print(e: any) {
        e.preventDefault()
        console.log(store.getState())
        console.log(localStorage)
    }
    
    render() {      
      return (
        <Container className="container">
          <Button onClick={(e) => this.print(e)}>Texto</Button>
        </Container>
      );
    }
  }

  export default Home;
  