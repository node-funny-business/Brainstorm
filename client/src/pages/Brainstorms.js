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


const styles = theme => ({
    card: {
        marginTop: theme.spacing.unit * 8
    }
})

class Brainstorms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brainstorm: {}
        }
    }
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
                                <Typography align="center" component="p">
                                    <p>Brainstorm 1</p>
                                    <p>Brainstorm 2</p>
                                    <p>Brainstorm 3</p>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(Brainstorms);
