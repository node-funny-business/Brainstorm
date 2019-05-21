import React, { Component } from "react";
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardHeader from '@material-ui/core/CardHeader';
import { CardContent } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { withAuth } from '@okta/okta-react';
import style from "@material-ui/system/style";
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

    class Instructions extends Component {

        constructor(props) {
            super(props);
            this.state = { authenticated: null };
            this.checkAuthentication = this.checkAuthentication.bind(this);
            this.checkAuthentication();
        }

        async checkAuthentication() {
            const authenticated = await this.props.auth.isAuthenticated();
            if (authenticated !== this.state.authenticated) {
                this.setState({ authenticated });
            }
        }

        componentDidUpdate() {
            this.checkAuthentication();
        }

        render() {
            if (this.state.authenticated === null) return null;

            const button = this.state.authenticated ?
              <button onClick={this.props.auth.logout}>Logout</button> :
              <button onClick={this.props.auth.login}>Login</button>;
            return (
                <div>
                    <Grid container spacing={24}>
                        <Grid item xs={3} />
                        <Grid item xs={6}>
                            <Card className="card">
                                <Typography align="center">
                                    <CardHeader title="Instructions" />
                                </Typography>
                                <CardContent>
                                    <Typography align="center" component="p">
                                        <p>Create as many concepts as you like.</p>
                                        <p>Within your concept, create as many ideas as you like.</p>
                                        <p>Within your idea, create as many steps as are necessary.</p>
                                        {button}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </div>
            )
        }
    }


export default withAuth(Instructions);
