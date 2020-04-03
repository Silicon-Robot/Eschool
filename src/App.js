import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import SendMail from './auth/signIn/pages/SendMail';
import SignUp from './auth/signUp/pages/SignUp'
import SignIn from './auth/signIn/pages/SignIn';
// import Footer from './shared/UIElements/Footer'
import ForgotPassword from './auth/signIn/pages/ForgotPwd';

class App extends React.Component {
    render() {
        return ( <
            Router >
            <
            Switch >
            <
            Route exact path = '/' > < ForgotPassword / > < /Route> <
            Route exact path = '/restpwd' > < ForgotPassword / > < /Route> <
            Route exact path = '/sendMail' > < SendMail / > < /Route> <
            Route exact path = '/signup' > < SignUp / > < /Route> <
            Route exact path = '/signin' > < SignIn / > < /Route> <
            Redirect to = '/' / >
            hello <
            /Switch> < /
            Router >
        );
    }
}

export default App;