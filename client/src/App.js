import React, { Component } from "react";
import Cards from "./components/Cards"

class App extends Component {
  
  state = {
    text: ""
  }

  handleInputChange = key => event => {
    const value = event.target.value;
    this.setState({
      [key]:value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    
  }
  
  render() {
    return (
      <div>
        <h1>Topic</h1>
        <form className="form" onSubmit={this.handleFormSubmit}>
          <input
            value={this.state.text}
            onChange={this.handleInputChange("text")}
            type="text"
            placeholder="Concept 1"
            />
        </form>
      </div>
      // <Cards />
    )
  };
}

export default App;
