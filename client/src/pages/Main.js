import React, { Component } from "react";
import Nav from "../components/Nav"
import Grid from '@material-ui/core/Grid';
// import ConceptCard from "../components/ConceptCard"
// import IdeaCard from "../components/IdeaCard"
import StepCard from "../components/StepCard"
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ConceptText from "../components/ConceptText"
import IdeaText from "../components/IdeaText"
import StepText from "../components/StepText"
import API from "../utils/API";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import pink from '@material-ui/core/colors/pink';
import classnames from 'classnames';
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

class Main extends React.Component {

    state = {
        brainstorm: [
            { id: 1, name: "Pizza", user_id: 1 }],
        concept: [
            { id: 1, name: "Pepperoni", brainstorm_id: 1 },
            { id: 2, name: "Hawaiian", brainstorm_id: 1 }],
        idea: [
            { id: 1, name: "Organic Pepperoni", concept_id: 1 },
            { id: 2, name: "Organic Cheese", concept_id: 1 },
        ],
        step: [
            { id: 1, name: "Buy Organic Pepperoni from Sprouts", idea_id: 1 },
            { id: 2, name: "Place Pepperoni on Pizza", idea_id: 1 }
        ],
        currconcept: {},
        curridea: {}
    }

    // GET Request to load data for Topic/Brainstorm
    // componentDidMount() {
    //     API.getBrainstorm(10)
    //         .then(res => 
    //             this.setState({
    //                 brainstorm: 
    //             })    
    //             )

    // }

    // UPDATE Request to load whenever updated
    // componentDidUpdate(prevProps) {
    //     // Typical usage (don't forget to compare props):
    //     if (this.props.userID !== prevProps.userID) {
    //       this.fetchData(this.props.userID);
    //     }
    //   }

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
    };

    selectCurrIdea = (index) => () => {
        this.setState({
            curridea: this.state.idea[index]
        });
    };

    handleConceptSubmit = query => event => {
        event.preventDefault();
        API.saveConcept(query)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };

    handleIdeaSubmit = query => event => {
        event.preventDefault();
        API.saveIdea(query)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };

    handleStepSubmit = query => event => {
        event.preventDefault();
        API.saveStep(query)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <Grid container spacing={24}>
                    <Grid item xs={4}>
                        <Styled>{({ classes }) =>
                            <Card className={classes.card1}>
                                <Typography align="center">
                                    <CardHeader title={this.state.brainstorm[0].name} />
                                </Typography>
                                <CardContent>
                                    {this.state.concept.map((concept, i) => (
                                        <ConceptText
                                            onClick={this.selectCurrConcept(i)}
                                            onChange={this.handleChange("concept", i, "name")}
                                            onSubmit={this.handleConceptSubmit(`${concept.name}`)}
                                            value={concept.name} />
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
                                        <IdeaText
                                            onClick={this.selectCurrIdea(i)}
                                            onChange={this.handleChange("idea", i, "name")}
                                            onSubmit={this.handleConceptSubmit(`${idea.name}`)}
                                            value={idea.name} />
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
                                        <StepText
                                            onChange={this.handleChange("step", i, "name")}
                                            onSubmit={this.handleConceptSubmit(`${step.name}`)}
                                            value={step.name} />
                                    ))}
                                </CardContent>
                            </Card>}
                        </Styled>
                    </Grid>
                </Grid>
            </div>
        )
    }
}
export default Main;