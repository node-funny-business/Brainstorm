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
        text: "",
        results: ""
    }

    handleChange = key => event => {
        const value = event.target.value;
        this.setState({ 
            [key]: value
        });
    };

    handleFormSubmit = query => event => {
        event.preventDefault();
        API.saveConcept(query)
            .then(res => this.setState({ results: res.data }))
            .catch(err => console.log(err));
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
                                onChange={this.handleChange("text")}
                                value={this.state.text} 
                                onSubmit={this.handleFormSubmit(this.state.text)}
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