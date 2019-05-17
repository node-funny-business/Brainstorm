import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import API from "./utils/API";
import AboutUs from "./pages/AboutUs"
import Instructions from "./pages/Instructions"
import MyAccount from "./pages/MyAccount"
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";

class App extends Component {

  // state = {
  //   text: ""
  // }

  // handleInputChange = key => event => {
  //   const value = event.target.value;
  //   this.setState({
  //     [key]: value
  //   });
  // };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   this.saveConcept(`${this.state.text}`)
  //   // alert(`Text: ${this.state.text}`)
  // }

  // saveConcept = query => {
  //   API.saveConcept(query)
  //     .then(res => console.log(res))
  //     .catch(err => console.log(err));
  // }

  render() {
    return (
      // <div>
      //   <h1>Topic</h1>
      //   <form className="form" onSubmit={this.handleFormSubmit}>
      //     <input
      //       value={this.state.text}
      //       onChange={this.handleInputChange("text")}
      //       type="text"
      //       placeholder="Concept 1"
      //     />
      //   </form>
      // </div>
      <div>
        <Router>
          <Route exact path="/" component={Home} />
          <Route exact path="/aboutus" component={AboutUs} />
          <Route exact path="/instructions" component={Instructions} />
          <Route exact path="/myaccount" component={MyAccount} />
        </Router>
      </div>
      // <SignIn />
    )
  };
}

export default App;
