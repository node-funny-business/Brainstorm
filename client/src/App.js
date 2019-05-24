import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';
import Nav from './components/Nav'
import AboutUs from "./pages/AboutUs";
import Instructions from "./pages/Instructions";
import Brainstorms from "./pages/Brainstorms";
import Main from "./pages/Main";
import Login from "./components/auth/login";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import pink from '@material-ui/core/colors/pink';

const theme = createMuiTheme({
  palette: {
    primary: { main: pink[100] },
    secondary: { main: "#D3D3D3" },
  },
  typography: { useNextVariants: true },
});

function onAuthRequired({ history }) {
  history.push('/login');
}


class App extends Component {
  componentDidMount() {
    // API.updateBrainstorm({ brainstorm: "ramen", id:1 }).then(data => {
    //   console.log("test-concept", data)
    // })
  }
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <Security issuer='https://dev-363275.okta.com/oauth2/default'
            client_id='0oam45rndnEWAIpaA356'
            redirect_uri={window.location.origin + '/implicit/callback'}
            onAuthRequired={onAuthRequired} >
            <Nav color="primary" />
            <Route path='/' exact={true} component={Instructions} />
            <Route path='/Instructions' exact={true} component={Instructions} />
            <SecureRoute path='/Main' exact={true} component={Main} />
            <Route path='/brainstorms' exact={true} component={Brainstorms} />
            <Route path='/aboutus' exact={true} component={AboutUs} />
            <Route path='/login' render={() => <Login baseUrl='https://dev-363275.okta.com' />} />
            <Route path='/implicit/callback' component={ImplicitCallback} />
            <Route exact path="/main/:id" component={Main} />
          </Security>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
