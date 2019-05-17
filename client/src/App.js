import React, { Component } from "react";
// import Cards from "./components/Cards"
import API from "./utils/API";


class App extends Component {

  state = {
    text: "",
    results: []
  }

  // componentWillMount() {
  //   this.getAll();
  // }


  handleFormSubmit = event => {
    event.preventDefault();
    this.saveConcept(`${this.state.text}`)
    // this.getAll();
    // alert(`Text: ${this.state.text}`)
  }

  saveConcept = query => {
    API.saveConcept(query)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  handleInputChange = key => event => {
    const value = event.target.value;
    this.setState({ 
      [key]: value
    });
  };

  // getAll = () => {
  //   API.getConcepts()
  //     .then(res => this.setState({ results: res.data }))
  //     .catch(err => console.log(err));
  // }

  render() {
    
    return (
      <div>
        <h1>Topic</h1>
        {/* <p>Get text: {JSON.stringify(this.state.results)}</p> */}
        <form className="form" onSubmit={this.handleFormSubmit}>
          <input
            value={this.state.text}
            onChange={this.handleInputChange}
            type="text"
            placeholder="Concept 1"
          />
           <button onClick={this.handleSubmitForm}>Submit</button>
        </form>
      <div>

      </div>
       
      </div>
      // <Cards />
    )
  };
}

export default App;
