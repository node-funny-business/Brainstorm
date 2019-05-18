import React, { Component } from "react";
import Nav from "../components/Nav"
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardHeader from '@material-ui/core/CardHeader';
import { CardContent } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import ConceptText from "../components/ConceptText"
import API from "../utils/API";

class Home extends React.Component {
    state = {
        concept:[],
        idea:[],
        step:[],
        currConcept:{},
        currIdea:{}
      }

    handleChange = key => event => {
        const value = event.target.value;
        this.setState({
            [key]: value
        });
    };

    saveConcept = query => {
        API.saveConcept(query)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }
    
    handleConceptSubmit = query => event => {
        event.preventDefault();
        this.saveConcept(query)
    }
   

    render() {
        return (
            <div>
                <Nav />
                <Grid container spacing={24}>
                    <Grid item xs={4}>
                        <Card>
                            <Typography align="center">
                                <CardHeader title="Topic" />
                            </Typography>
                            <CardContent>
                                <ConceptText
                                    onChange={this.handleChange("concept")}
                                    onSubmit={this.handleConceptSubmit(`${this.state.concept}`)}
                                    value={this.state.concept}
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
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card>
                            <Typography align="center">
                                <CardHeader title="Idea" />
                            </Typography>
                            <CardContent>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Home;