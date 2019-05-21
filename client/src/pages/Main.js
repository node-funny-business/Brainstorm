import React from "react";
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

    saveConcept = query => {
        API.saveConcept(query)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }
    
    handleFormSubmit = query => event => {
        event.preventDefault();
        this.saveConcept(`${this.state.text}`)
    }
   

    render() {
        return (
            <div>
                <Grid container spacing={24}>
                    <Grid item xs={4}>
                        <Card>
                            <Typography align="center">
                                <CardHeader title="Topic" />
                            </Typography>
                            <CardContent>
                                <form className='form' onSubmit={this.handleFormSubmit}>
                                <ConceptText
                                    onChange={this.handleChange("text")}
                                    value={this.state.text}
                                />
                                </form>
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