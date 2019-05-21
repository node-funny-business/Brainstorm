import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';

// import API from "./utils/API";
<<<<<<< HEAD
import AboutUs from "./pages/AboutUs"
import Instructions from "./pages/Instructions"
import Brainstorms from "./pages/Brainstorms"
import Main from "./pages/Main";
// import SignIn from "./pages/SignIn";
=======
import Nav from './components/Nav'
import AboutUs from "./pages/AboutUs";
import Instructions from "./pages/Instructions";
import MyAccount from "./pages/MyAccount";
import Main from "./pages/Main";
import Login from "./components/auth/login";
>>>>>>> 6e5dc8c61855275e3ba5d162a8958da6046bd27d


function onAuthRequired({ history }) {
  history.push('/login');
}


class App extends Component {
<<<<<<< HEAD
  state = {
    
  }
  // componentWillMount() {
  //   this.getAll();
  // }


  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   this.saveConcept(`${this.state.text}`)
  //   this.getAll();
  //   // alert(`Text: ${this.state.text}`)
  // }

  // saveConcept = query => {
  //   API.saveConcept(query)
  //     .then(res => console.log(res))
  //     .catch(err => console.log(err));
  // }

  // handleInputChange = key => event => {
  //   const value = event.target.value;
  //   this.setState({ 
  //     [key]: value
  //   });
  // };

  // getAll = () => {
  //   API.getConcepts()
  //     .then(res => this.setState({ results: res.data }))
  //     .catch(err => console.log(err));
  // }

=======
>>>>>>> 6e5dc8c61855275e3ba5d162a8958da6046bd27d
  render() {
    return (
        
      

      <Router>
<<<<<<< HEAD
        <Route exact path ='/' component={Main} />
        <Route exact path ='/aboutus' component={AboutUs} />
        <Route exact path ='/instructions' component={Instructions} />
        <Route exact path ='/brainstorms' component={Brainstorms} />
=======
        <Security issuer='https://dev-363275.okta.com/oauth2/default'
                  client_id='0oam45rndnEWAIpaA356'
                  redirect_uri={window.location.origin + '/implicit/callback'}
                  onAuthRequired={onAuthRequired} >
          <Nav />
          <Route path='/' exact={true} component={Instructions} />
          <Route path='/Instructions' exact={true} component={Instructions} />
          <SecureRoute path='/Main' exact={true} component={Main} />
          <Route path='/myaccount' exact={true} component={MyAccount} />
          <Route path='/aboutus' exact={true} component={AboutUs} />
          <Route path='/login' render={() => <Login baseUrl='https://dev-363275.okta.com' />} />
          <Route path='/implicit/callback' component={ImplicitCallback} />
        </Security>
>>>>>>> 6e5dc8c61855275e3ba5d162a8958da6046bd27d
      </Router>
    );
  }
}

export default App;
