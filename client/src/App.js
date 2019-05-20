import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';

// import API from "./utils/API";
import AboutUs from "./pages/AboutUs"
import Instructions from "./pages/Instructions"
import MyAccount from "./pages/MyAccount"
import Home from "./pages/Home";
import Login from "./components/auth/login";
import { Switch } from "@material-ui/core";

function onAuthRequired({ history }) {
  history.push('/login');
}


class App extends Component {

  // state = {
  //   text: "",
  //   results: []
  // }

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

  render() {
    return (
      // <div>
      //   <h1>Topic</h1>
      //   <p>Get text: {JSON.stringify(this.state.results)}</p>
      //   <form className="form" onSubmit={this.handleFormSubmit}>
      //     <input
      //       value={this.state.text}
      //       onChange={this.handleInputChange}
      //       type="text"
      //       placeholder="Concept 1"
      //     />
      //   </form>
      // </div>
      <Router>

        <Security issuer='https://dev-363275.okta.com/oauth2/default'
          client_id='0oam45rndnEWAIpaA356'
          redirect_uri={window.location.origin + '/implicit/callback'}
          onAuthRequired={onAuthRequired} >
          <div className="App">
            <Route exact={true} path='/' component={Home} />
            <SecureRoute exact={true} path='/aboutus' component={AboutUs} />
            <Route exact path='/instructions' component={Instructions} />
            <Route exact path='/myaccount' component={MyAccount} />
            <Route path='/login' render={() => <Login baseUrl='https://dev-363275.okta.com' />} />
            <Route path='/implicit/callback' component={ImplicitCallback} />
          </div>
        </Security>
      </Router>

    )
  };
}

export default App;
