import React from 'react';
import { Provider } from 'react-redux';
import SignIn from './components/SignIn';

import store from './store';

const App = () => <Provider store={store}>
    <SignIn />
    </Provider>;

export default App;
