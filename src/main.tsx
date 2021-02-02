import React from 'react';
import Home from './components/Home';
import { Container } from '@material-ui/core';
import { Switch, Route } from 'react-router-dom';

const Main = () => {
    <main>
        <Container>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route />
            </Switch>
        </Container>
    </main>
};

export default Main;