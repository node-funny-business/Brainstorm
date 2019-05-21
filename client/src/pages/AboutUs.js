import React from "react";
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardHeader from '@material-ui/core/CardHeader';
import { CardContent } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    }
});

function AboutUs(props) {
    const { classes } = props;
    return (
        <div>
            <Grid container spacing={24}>
                <Grid item xs={4}>
                    <Card>
                        <Typography align="center">
                            <CardHeader title="Daniel Olson" />
                        </Typography>
                        <CardMedia
                            className={classes.media}
                            image="https://via.placeholder.com/500x350.jpg"
                            title="Daniel Olson"
                        />
                        <CardContent>
                            <Typography component="p">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card>
                        <Typography align="center">
                            <CardHeader title="Jonatan Viera" />
                        </Typography>
                        <CardMedia
                            className={classes.media}
                            image="https://via.placeholder.com/500x350.jpg"
                            title="Jonatan Viera"
                        />
                        <CardContent>
                        <Typography component="p">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card>
                        <Typography align="center">
                            <CardHeader title="Jason Lee" />
                        </Typography>
                        <CardMedia
                            className={classes.media}
                            image="https://via.placeholder.com/500x350.jpg"
                            title="Jason Lee"
                        />
                        <CardContent>
                        <Typography component="p">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}

export default withStyles(styles)(AboutUs);