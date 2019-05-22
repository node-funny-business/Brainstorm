import React, { Component } from "react";
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardHeader from '@material-ui/core/CardHeader';
import { CardContent } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import { spacing } from '@material-ui/system';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import pink from '@material-ui/core/colors/pink';
import API from "../utils/API";
import { Link } from 'react-router-dom'


const styles = theme => ({
    card: {
        marginTop: theme.spacing.unit * 8
    }
})

// sendToMain = (id) => {
//     API.sendToMain(id)
//         .then(res => console.log(res))
//         .catch(err => console.log(err))
// }

class Brainstorms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brainstorm: [
                { id: 1, name: "Pizza", user_id: 1 },
                { id: 2, name: "Burgers", user_id: 1 },
                { id: 3, name: "Sushi", user_id: 1 }
            ]
        }
    }
    // componentDidMount() {
    //     API.getAllBrainstorm(10)
    //         .then(res =>
    //             this.setState({
    //                 brainstorm: res.body.data
    //             })
    //         )
    //     }
        // const { classes } = props;
        render() {
            return (
                <div>
                    <Grid container spacing={24}>
                        <Grid item xs={3} />
                        <Grid item xs={6}>
                            <Card
                            // className={classes.card}
                            >
                                <Typography align="center">
                                    <CardHeader title="My Brainstorms" />
                                </Typography>
                                <CardContent>
                                    {this.state.brainstorm.map((brainstorm) => (
                                        <Typography align="center">
                                            <Link 
                                            to={"/main/"+brainstorm.id}
                                            component="button">{brainstorm.name}
                                            </Link>
                                        </Typography>
                                    ))}
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </div>
            )
        }
    }

    export default withStyles(styles)(Brainstorms);
