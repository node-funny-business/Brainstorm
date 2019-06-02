import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import BrainstormText from "../components/BrainstormText"
import ConceptText from "../components/ConceptText"
import IdeaText from "../components/IdeaText"
import StepText from "../components/StepText"
import BrainstormCard from "../components/BrainstormCard"
import IdeaCard from "../components/IdeaCard"
import StepCard from "../components/StepCard"
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

// Creates new lines
function createEmptyBrainstorm() {
  return { brainstorm: "" }
}

function createEmptyConcept() {
  return { concept: "" }
}

function createEmptyIdea() {
  return { idea: "" }
}

function createEmptyStep() {
  return { step: "" }
}

class Main extends React.Component {

  state = {
    concept: [],
    idea: [],
    step: [],
    currbrainstorm: {},
    currconcept: null,
    curridea: null
  }

  // GET Requests
  componentDidMount() {
    if (this.state.currbrainstorm.id) {
      API.getBrainstorm(this.state.currbrainstorm.id)
        .then(res =>
          API.getAllConcepts(this.state.currbrainstorm.id)
            .then(data => {
              var viewModels = data.data;
              this.setState({
                concept: [...viewModels, createEmptyConcept()],
                currbrainstorm: res.data
              });
            })
        )
        .catch(err => console.log(err));
    } else {
      createEmptyBrainstorm();
    }
  }

  // Handles change for Concept, Idea, and Step
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

  // Handles change for brainstorm
  handleBrainstormChange = (key, index, property) => event => {
    const value = event.target.value;
    let currValue = Object.assign({}, this.state[key], { [property]: value });
    this.setState({
      [key]: currValue
    })
  };

  // Sets state for next card when concept is selected
  selectCurrConcept = (index) => () => {
    var select = new Promise((resolve, reject) => {
      resolve();
    });
    select.then(() =>
      this.setState({
        currconcept: this.state.concept[index]
      })
    ).then(() => {
      API.getAllIdeas(this.state.currconcept.id)
        .then(data => {
          var viewModels = data.data;
          this.setState({
            idea: [...viewModels, createEmptyIdea()],
            curridea: ""
          });
        })
    }).catch(err => console.log(err));
  };

  // Sets idea for next card when concept is selected
  selectCurrIdea = (index) => () => {
    var select = new Promise((resolve, reject) => {
      resolve();
    });
    select.then(() =>
      this.setState({
        curridea: this.state.idea[index]
      })
    )
      .then(() => {
        API.getAllSteps(this.state.curridea.id)
          .then(data => {
            var viewModels = data.data;
            this.setState({
              step: [...viewModels, createEmptyStep()]
            });
          })
      }).catch(err => console.log(err));
  };

  // If id exists, Update. If not, Post.
  handleBrainstormSubmit = index => event => {
    event.preventDefault();
    const brainstorm = this.state.currbrainstorm;
    const id = brainstorm.id
    const value = brainstorm.brainstorm
    if (id) {
      API.updateBrainstorm({ brainstorm: value, id: id })
        .then(res =>
          this.setState({
            currbrainstorm: res.data
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

  conceptUpdate = concepts => {
    this.setState({
      concept: concepts
    })
  };

  conceptSave = newConcept => {
    const concept = this.state.concept;
    this.setState({
      concept: [...concept.slice(0, concept.length - 1), newConcept, createEmptyConcept()],
      idea: [createEmptyIdea()],
      currconcept: newConcept
    })
  };

  ideaUpdate = ideas => {
    this.setState({
      idea: ideas
    })
  };

  ideaSave = newIdea => {
    const idea = this.state.idea;
    this.setState({
      idea: [...idea.slice(0, idea.length - 1), newIdea, createEmptyIdea()],
      step: [createEmptyStep()],
      curridea: newIdea
    })
  };

  stepUpdate = steps => {
    this.setState({
      step: steps
    })
  };

  stepSave = newStep => {
    const step = this.state.step;
    this.setState({
      step: [...step.slice(0, step.length - 1), newStep, createEmptyStep()]
    })
  };

  // handleStepSubmit = index => event => {
  //   event.preventDefault();
  //   const step = this.state.step;
  //   const id = step[index].id
  //   if (id) {
  //     API.updateStep(step[index])
  //       .then(res =>
  //         this.setState({
  //           step: step.map(item => {
  //             if (item.id === res.data.id) {
  //               return res.data;
  //             }
  //             return item;
  //           })
  //         })
  //       )
  //       .catch(err => console.log(err));
  //   } else {
  //     let newData = this.stepData(index)
  //     API.saveStep(newData)
  //       .then(res =>
  //         this.setState({
  //           step: [...step.slice(0, step.length - 1), res.data, createEmptyStep()]
  //         })
  //       )
  //       .catch(err => console.log(err));
  //   }
  // };
  // // Reassigns stepData for axios
  // stepData(index) {
  //   let data = Object.assign({}, this.state.step[index], { IdeaId: this.state.curridea.id });
  //   console.log(this.state.curridea.id)
  //   return data;
  // }

  render() {
    return (
      <Grid container spacing={24}>
        <Grid item xs={4}>
          <BrainstormCard
            brainstormValue={this.state.currbrainstorm.brainstorm}
            brainstormChange={this.handleBrainstormChange}
            brainstormSubmit={this.handleBrainstormSubmit}
            id={this.state.currbrainstorm.id}
            conceptArray={this.state.concept}
            selectConcept={this.selectCurrConcept}
            conceptChange={this.handleChange}
            conceptUpdate={this.conceptUpdate}
            conceptSave={this.conceptSave}
          />
        </Grid>
        {this.state.currconcept &&
          <Grid item xs={4}>
            <IdeaCard
              title={this.state.currconcept.concept}
              conceptId={this.state.currconcept.id}
              ideaArray={this.state.idea}
              setIdea={this.selectCurrIdea}
              textChange={this.handleChange}
              ideaUpdate={this.ideaUpdate}
              ideaSave={this.ideaSave}
            />
          </Grid>}
        {this.state.curridea &&
          <Grid item xs={4}>
            <StepCard
              title={this.state.curridea.idea}
              ideaId={this.state.curridea.id}
              stepArray={this.state.step}
              textChange={this.handleChange}
              hitEnter={this.handleStepSubmit}
              stepUpdate={this.stepUpdate}
              stepSave={this.stepSave}
            />
          </Grid>}
      </Grid>
    )
  }
}
export default Main;