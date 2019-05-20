import React, { Component } from "react";
import Nav from "../components/Nav"
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardHeader from '@material-ui/core/CardHeader';
import { CardContent } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import ConceptText from "../components/ConceptText"
import IdeaText from "../components/IdeaText"
import StepText from "../components/StepText"
import API from "../utils/API";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import pink from '@material-ui/core/colors/pink';


const theme = createMuiTheme({
    palette: {
      primary: { main: purple[500] },
      secondary: { main: "#D3D3D3" },
    },
    typography: { useNextVariants: true },
  });


class Home extends React.Component {
    state = {
        brainstorm: [{id:1, name:"Pizza", user_id:1}],
        concept: [{id:1, name:"Pepperoni", topic_id:1}],
        idea: [],
        step: [],
        currConcept: {},
        currIdea: {}
    }

    // GET Request to load data for Topic/Brainstorm
    // componentDidMount() {
    //     this.setState(()=>{
    //         return
    //     })
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
        const newState = this.state[key].map((x, i) => {
            if (i === index) {
                return Object.assign({}, this.state[key][index], { [property]: value });

            } else {
                return this.state[key][i];
            }
        })
        this.setState({
            [key]: newState
        });
        // console.log(newState)
    };

    saveConcept = query => {
        API.saveConcept(query)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    saveIdea = query => {
        API.saveIdea(query)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    saveStep = query => {
        API.saveStep(query)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    handleConceptSubmit = query => event => {
        event.preventDefault();
        this.saveConcept(query)
    }

    handleIdeaSubmit = query => event => {
        event.preventDefault();
        this.saveIdea(query)
    }

    handleStepSubmit = query => event => {
        event.preventDefault();
        this.saveStep(query)
    }

    render() {
        return (
            <div>
                <MuiThemeProvider theme={theme}>
                    <Nav color="primary"/>
                    <Grid container spacing={24}>
                        <Grid item xs={4}>
                            <Card backgroundColor="secondary">
                                <Typography align="center">
                                    <CardHeader title={this.state.brainstorm[0].name} />
                                </Typography>
                                <CardContent>
                                    <ConceptText
                                        onChange={this.handleChange("concept", 0, "name")}
                                        onSubmit={this.handleConceptSubmit(`${this.state.concept}`)}
                                        value={this.state.concept[0].name}
                                    />
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card>
                                <Typography align="center">
                                    <CardHeader title="Concept" />
                                </Typography>
                                <CardContent>
                                    <IdeaText
                                        onChange={this.handleChange("idea")}
                                        onSubmit={this.handleIdeaSubmit(`${this.state.idea}`)}
                                        value={this.state.idea}
                                    />
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card>
                                <Typography align="center">
                                    <CardHeader title="Idea" />
                                </Typography>
                                <CardContent>
                                    <StepText
                                        onChange={this.handleChange("step")}
                                        onSubmit={this.handleStepSubmit(`${this.state.step}`)}
                                        value={this.state.step}
                                    />
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </MuiThemeProvider>
            </div>
        )
    }
}

export default Home;