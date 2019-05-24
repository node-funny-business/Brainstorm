import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
// import ConceptCard from "../components/ConceptCard"
// import IdeaCard from "../components/IdeaCard"
// import StepCard from "../components/StepCard"
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import BrainstormText from "../components/BrainstormText"
import ConceptText from "../components/ConceptText"
import IdeaText from "../components/IdeaText"
import StepText from "../components/StepText"
import API from "../utils/API";
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

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

class Main extends React.Component {

  state = {
    concept: [],
    idea: [],
    step: [],
    currbrainstorm: { id: 1 },
    currconcept: null,
    curridea: null
  }

  // GET Requests
  componentDidMount() {
    if (this.state.currbrainstorm.id) {
      API.getBrainstorm(this.state.currbrainstorm.id)
        .then(res =>
          API.getAllConcepts(this.state.currbrainstorm.id).then(data => {
            var viewModels = data.data;
            this.setState({
              concept: [...viewModels, createEmptyConcept()],
              currbrainstorm: res.data
            });
          })
        )
        .catch(err => console.log(err));
    } else {
      API.saveBrainstorm({ brainstorm: "" })
        .then(res =>
          this.setState({
            currbrainstorm: res.data,
            concept: [createEmptyConcept()]
          })

        )
        .catch(err => console.log(err));
    }
  }




  getConcept() {
    API.getConcept(this.state.currbrainstorm.id)
      .then(res =>
        this.setState({
          concept: res.body.data
        })
      )
      .catch(err => console.log(err));
  }

  // getStep() {
  //     API.getSteps(this.state.curridea.id)
  //         .then(res =>
  //             this.setState({
  //                 step: res.body.data
  //             })
  //         )
  //         .catch(err => console.log(err));
  // }


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

  handleBrainstormChange = (key, index, property) => event => {
    const value = event.target.value;
    let currValue = Object.assign({}, this.state[key], { [property]: value });
    this.setState({
      [key]: currValue
    })
  };


  selectCurrConcept = (index) => () => {
    API.getConcept(this.state.currbrainstorm.id)
      .then(res =>
        this.setState({
          currconcept: this.state.concept[index]
        })
      )
      .then(res => {
        API.getAllIdeas(this.state.currconcept.id)
          .then(data => {
            var viewModels = data.data;
            this.setState({
              idea: [...viewModels, createEmptyIdea()]
            });
          })
      })
      .catch(err => console.log(err));
  };

  selectCurrIdea = (index) => () => {
    API.getIdea(this.state.currconcept.id)
      .then(res =>
        this.setState({
          curridea: this.state.idea[index]
        })
      )
      .then(res => {
        API.getAllSteps(this.state.curridea.id)
          .then(data => {
            var viewModels = data.data;
            this.setState({
              step: [...viewModels, createEmptyStep()]
            });
          })
      })
      .catch(err => console.log(err));
  };

  // POST Routes
  handleBrainstormSubmit = index => event => {
    event.preventDefault();
    const brainstorm = this.state.currbrainstorm;
    const id = brainstorm.id
    const value = brainstorm.brainstorm
    if (id) {
      API.updateBrainstorm({ brainstorm: value, id: id })
        .then(res =>
          this.setState({
            currbrainstorm: brainstorm.map(item => {
              if (item.id === res.data.id) {
                return res.data;
              }
              return item;
            })
          })
        )
        .catch(err => console.log(err));
    } else {
      API.saveBrainstorm({ brainstorm: value })
        .then(res =>
          this.setState({
            currbrainstorm: res.data,
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
      let newData = this.conceptData(index);
      API.saveConcept(newData)
        .then(res =>
          this.setState({
            concept: [...concept.slice(0, concept.length - 1), res.data, createEmptyConcept()],
            idea: [createEmptyIdea()],
            currconcept: res.data
          })
        )
        .catch(err => console.log(err));
    }
  };

  // Reassigns conceptData for axios
  conceptData(index) {
    let data = Object.assign({}, this.state.concept[index], { BrainstormId: this.state.currbrainstorm.id });
    return data;
  }

  handleIdeaSubmit = index => event => {
    event.preventDefault();
    const idea = this.state.idea;
    const id = idea[index].id
    if (id) {
      API.updateIdea(idea[index])
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
      let newData = this.ideaData(index)
      API.saveIdea(newData)
        .then(res =>
          this.setState({
            idea: [...idea.slice(0, idea.length - 1), res.data, createEmptyIdea()],
            step: [createEmptyStep()]
          })
        )
        .catch(err => console.log(err));
    }
  };

  ideaData(index) {
    let data = Object.assign({}, this.state.idea[index], { ConceptId: this.state.currconcept.id });
    return data;
  }

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
              <CardHeader align="center"
                title={
                  // this.state.brainstorm.map((brainstorm, i) => (
                  <BrainstormText
                    key={this.state.currbrainstorm.id}
                    value={
                      this.state.currbrainstorm.brainstorm
                    }
                    onChange=
                    {this.handleBrainstormChange(
                      "currbrainstorm", 0, "brainstorm")}
                    onSubmit={this.handleBrainstormSubmit(0)}
                    id={this.state.currbrainstorm.id}
                    typ3={"brainstorm"}
                  />
                  // ))
                }
              >
              </CardHeader>
              <CardContent>
                {this.state.concept.map((concept, i) => (
                  <ConceptText
                    key={concept.id}
                    id={concept.id}
                    onClick={this.selectCurrConcept(i)}
                    onChange={this.handleChange("concept", i, "concept")}
                    onSubmit={this.handleConceptSubmit(i)}
                    value={concept.concept}
                    typ3={"concept"}
                  />
                ))}
              </CardContent>
            </Card>}
          </Styled>
        </Grid>
        {this.state.currconcept &&
          <Grid item xs={4}>
            <Styled>{({ classes }) =>
              <Card className={classes.card2}>
                <CardHeader align="center" title={this.state.currconcept.concept} />
                <CardContent>
                  {this.state.idea.map((idea, i) => (
                    <IdeaText
                      key={idea.id}
                      id={idea.id}
                      onClick={this.selectCurrIdea(i)}
                      onChange={this.handleChange("idea", i, "idea")}
                      onSubmit={this.handleIdeaSubmit(i)}
                      value={idea.idea}
                      typ3={"idea"}
                    />
                  ))}
                </CardContent>
              </Card>}
            </Styled>
          </Grid>}
        {this.state.curridea &&
          <Grid item xs={4}>
            <Styled>{({ classes }) =>
              <Card className={classes.card3}>
                <CardHeader align="center" title={this.state.curridea.idea} />
                <CardContent>
                  {this.state.step.map((step, i) => (
                    <StepText
                      key={step.id}
                      // onClick={this.getSteps()}
                      onChange={this.handleChange("step", i, "step")}
                      onSubmit={this.handleStepSubmit(i)}
                      value={step.step} />
                  ))}
                </CardContent>
              </Card>}
            </Styled>
          </Grid>}
      </Grid>
    )
  }
}
export default Main;