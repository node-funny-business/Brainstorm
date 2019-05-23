import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
// import ConceptCard from "../components/ConceptCard"
// import IdeaCard from "../components/IdeaCard"
// import StepCard from "../components/StepCard"
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import BrainstormText from "../components/BrainstormText"
import DeleteBtn from "../components/DeleteBtn"
import ConceptText from "../components/ConceptText"
import IdeaText from "../components/IdeaText"
import StepText from "../components/StepText"
import API from "../utils/API";
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

function createEmptyBrainstorm() {
  return { name: "" }
}

function createEmptyConcept() {
  return { name: "" }
}

function createEmptyIdea() {
  return { name: "" }
}

function createEmptyStep() {
  return { name: "" }
}


function createStyled(styles, options) {
  function Styled(props) {
    const { children, ...other } = props;
    return children(other);
  }
  Styled.propTypes = {
    children: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
  };
  return withStyles(styles, options)(Styled);
}

const Styled = createStyled({
  card1: {
    backgroundColor: '#D7CCC8'
  },
  card2: {
    backgroundColor: '#CFD8DC'
  },
  card3: {
    backgroundColor: '#EEEEEE'
  },
});

class Main extends React.Component {

  state = {
    brainstorm: [
      { id: 1, name: "Pizza", user_id: 1 }
    ],
    concept: [
      { id: 1, name: "Pepperoni", brainstorm_id: 1 },
      { id: 2, name: "Hawaiian", brainstorm_id: 1 }
    ],
    idea: [
      { id: 1, name: "Organic Pepperoni", concept_id: 1 },
      { id: 2, name: "Organic Cheese", concept_id: 1 },
    ],
    step: [
      { id: 1, name: "Buy Organic Pepperoni from Sprouts", idea_id: 1 },
      { id: 2, name: "Place Pepperoni on Pizza", idea_id: 1 }
    ],
    currbrainstorm: {
      id: 1
    },
    currconcept: {},
    curridea: {}
  }

  // GET Requests
  componentDidMount() {
    API.getAllConcepts(this.state.currbrainstorm.id).then(data => {
      var viewModels = data.data.map(oldConcept => ({ id: oldConcept.id, name: oldConcept.concept }));
      this.setState({
        concept: [...viewModels, createEmptyConcept()]
      });
    })
    // this.setState({
    //   brainstorm: [createEmptyBrainstorm()],
    //   concept: [...this.state.concept
    //     // , createEmptyConcept()
    //   ],
    //   idea: [...this.state.idea, createEmptyIdea()],
    //   step: [...this.state.step, createEmptyStep()]
    // })
    // API.getBrainstorm(this.props.params.id)
    //     .then(res =>
    //         this.setState({
    //             brainstorm: res.body.data
    //         })
    //     )
    //     .catch(err => console.log(err));
  }

  // getConcepts() {
  //     API.getConcept(this.state.brainstorm[0].name)
  //         .then(res =>
  //             this.setState({
  //                 concept: res.body.data
  //             })
  //         )
  //         .catch(err => console.log(err));
  // }

  // getIdeas() {
  //     API.getIdea(this.state.currconcept.name)
  //         .then(res =>
  //             this.setState({
  //                 idea: res.body.data
  //             })
  //         )
  //         .catch(err => console.log(err));
  // }

  // getSteps() {
  //     API.getSteps(this.state.curridea.name)
  //         .then(res =>
  //             this.setState({
  //                 step: res.body.data
  //             })
  //         )
  //         .catch(err => console.log(err));
  // }

  // UPDATE Request to load whenever updated

  // componentDidUpdate(prevProps) {
  //   // Typical usage (don't forget to compare props):
  //   if (this.props.userID !== prevProps.userID) {
  //     this.fetchData(this.props.userID);
  //   }
  // }

  // Or should UPDATE be run here?
  handleChange = (key, index, property) => event => {
    const value = event.target.value;
    let currValue = null;
    const newState = this.state[key].map((x, i) => {
      if (i === index) {
        currValue = Object.assign({}, this.state[key][index], { [property]: value });
        return currValue;

      } else {
        return this.state[key][i];
      }
    })
    this.setState({
      [key]: newState,
      ['curr' + key]: currValue
    })
    // console.log(newState)
  };

  selectCurrConcept = (index) => () => {
    this.setState({
      currconcept: this.state.concept[index]
    });
    // getConcepts();
  };

  selectCurrIdea = (index) => () => {
    this.setState({
      curridea: this.state.idea[index]
    });
    // getIdeas();
  };

  // POST Routes
  handleBrainstormSubmit = index => event => {
    event.preventDefault();
    const brainstorm = this.state.brainstorm;
    const id = brainstorm[index].id
    if (id) {
      API.updateBrainstorm()
        .then(res =>
          this.setState({
            brainstorm: brainstorm.map(item => {
              if (item.id === res.data.id) {
                return res.data;
              }
              return item;
            })
          })
        )
        .catch(err => console.log(err));
    } else {
      API.saveBrainstorm(index)
        .then(res =>
          this.setState({
            brainstorm: res.data,
            concept: [createEmptyConcept()]
          })
          
        )
        .catch(err => console.log(err));
    }
  };

  handleConceptSubmit = index => event => {
    event.preventDefault();
    const concept = this.state.concept;
    const id = concept[index].id
    if (id) {
      API.updateConcept(concept[index])
        .then(res =>
          this.setState({
            concept: concept.map(item => {
              if (item.id === res.data.id) {
                return res.data;
              }
              return item;
            })
          })
        )
        .catch(err => console.log(err));
    } else {
      API.saveConcept(concept[index])
        .then(res =>
          this.setState({
            concept: [...concept.slice(0, concept.length - 1), res.data, createEmptyConcept()]
          })
        )
        .catch(err => console.log(err));
    }
  };

  handleIdeaSubmit = index => event => {
    event.preventDefault();
    const idea = this.state.idea;
    const id = idea[index].id
    if (id) {
      API.updateIdea()
        .then(res =>
          this.setState({
            idea: idea.map(item => {
              if (item.id === res.data.id) {
                return res.data;
              }
              return item;
            })
          })
        )
        .catch(err => console.log(err));
    } else {
      API.saveIdea(index)
        .then(res =>
          this.setState({
            idea: [...idea.slice(0, idea.length - 1), res.data, createEmptyIdea()]
          })
        )
        .catch(err => console.log(err));
    }
  };

  handleStepSubmit = index => event => {
    event.preventDefault();
    const step = this.state.step;
    const id = step[index].id
    if (id) {
      API.updateStep()
        .then(res =>
          this.setState({
            Step: step.map(item => {
              if (item.id === res.data.id) {
                return res.data;
              }
              return item;
            })
          })
        )
        .catch(err => console.log(err));
    } else {
      API.saveStep(index)
        .then(res =>
          this.setState({
            step: [...step.slice(0, step.length - 1), res.data, createEmptyStep()]
          })
        )
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Grid container spacing={24}>
        <Grid item xs={4}>
          <Styled>{({ classes }) =>
            <Card className={classes.card1}>
              <Typography align="center">
                <CardHeader title={
                  this.state.brainstorm.map((brainstorm, i) => (
                    <div>
                      <BrainstormText
                        value={brainstorm.name}
                        onChange={this.handleChange("brainstorm", i, "name")}
                        onSubmit={this.handleBrainstormSubmit(i)}
                        id={this.state.brainstorm[i].id}
                        typ3={"brainstorm"}
                      />
                    </div>
                  ))
                }>
                </CardHeader>
              </Typography>
              <CardContent>
                {this.state.concept.map((concept, i) => (
                  <div>
                    <ConceptText
                      onClick={this.selectCurrConcept(i)}
                      onChange={this.handleChange("concept", i, "name")}
                      onSubmit={this.handleConceptSubmit(i)}
                      value={concept.name} />
                  </div>
                ))}
              </CardContent>
            </Card>}
          </Styled>
        </Grid>
        <Grid item xs={4}>
          <Styled>{({ classes }) =>
            <Card className={classes.card2}>
              <Typography align="center">
                <CardHeader title={this.state.currconcept.name} />
              </Typography>
              <CardContent>
                {this.state.idea.map((idea, i) => (
                  <div>
                    <IdeaText
                      onClick={this.selectCurrIdea(i)}
                      onChange={this.handleChange("idea", i, "name")}
                      onSubmit={this.handleIdeaSubmit(i)}
                      value={idea.name} />
                  </div>
                ))}
              </CardContent>
            </Card>}
          </Styled>
        </Grid>
        <Grid item xs={4}>
          <Styled>{({ classes }) =>
            <Card className={classes.card3}>
              <Typography align="center">
                <CardHeader title={this.state.curridea.name} />
              </Typography>
              <CardContent>
                {this.state.step.map((step, i) => (
                  <div>
                    <StepText
                      // onClick={this.getSteps()}
                      onChange={this.handleChange("step", i, "name")}
                      onSubmit={this.handleStepSubmit(i)}
                      value={step.name} />
                  </div>
                ))}
              </CardContent>
            </Card>}
          </Styled>
        </Grid>
      </Grid>
    )
  }
}
export default Main;