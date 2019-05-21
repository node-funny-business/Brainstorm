import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';

// import API from "./utils/API";
import AboutUs from "./pages/AboutUs";
import Instructions from "./pages/Instructions";
import MyAccount from "./pages/MyAccount";
import Main from "./pages/Main";
import Login from "./components/auth/login";
import Home from "./pages/Home";
import SignIn from "./pages/Login";
// import { Switch } from "@material-ui/core";

function onAuthRequired({ history }) {
  history.push('/login');
}


class App extends Component {
  render() {
    return (
      <Router>
        <Security issuer='https://dev-363275.okta.com/oauth2/default'
                  client_id='0oam45rndnEWAIpaA356'
                  redirect_uri={window.location.origin + '/implicit/callback'}
                  onAuthRequired={onAuthRequired} >
          
          <Route path='/' exact={true} component={SignIn} />
          <Route path='/Instructions' exact={true} component={Instructions} />
          <SecureRoute path='/Main' exact={true} component={Main} />
          <Route path='/myaccount' exact={true} component={MyAccount} />
          <Route path='/aboutus' exact={true} component={AboutUs} />
          <Route path='/login' render={() => <Login baseUrl='https://dev-363275.okta.com' />} />
          <Route path='/implicit/callback' component={ImplicitCallback} />
        </Security>
      </Router>
    );
  }
}

export default App;
