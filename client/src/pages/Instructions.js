import React from "react";
import Nav from "../components/Nav"
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardHeader from '@material-ui/core/CardHeader';
import { CardContent } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import pink from '@material-ui/core/colors/pink';


const theme = createMuiTheme({
    palette: {
      primary: { main: pink[300] },
      secondary: { main: "#D3D3D3" },
    },
    typography: { useNextVariants: true },
  });

const styles = theme => ({
    card: {
        marginTop: theme.spacing.unit * 8
    }
})

function Instructions(props) {
    const { classes } = props;
    return (
        <div>
            <MuiThemeProvider theme={theme}>
                <Nav color="primary" />
                <Grid container spacing={24}>
                    <Grid item xs={3} />
                    <Grid item xs={6}>
                        <Card className={classes.card}>
                            <Typography align="center">
                                <CardHeader title="Instructions" />
                            </Typography>
                            <CardContent>
                                <Typography align="center" component="p">
                                    <p>Create as many concepts as you like.</p>
                                    <p>Within your concept, create as many ideas as you like.</p>
                                    <p>Within your idea, create as many steps as are necessary.</p>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </MuiThemeProvider>
        </div>
            )
        }
        

export default withStyles(styles)(Instructions);