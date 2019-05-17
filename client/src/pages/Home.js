import React from "react";
import Nav from "../components/Nav"
import TextLines from "../components/TextLines"
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardHeader from '@material-ui/core/CardHeader';
import { CardContent } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';

function Home() {
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
                            <TextLines />
                            <TextLines />
                            <TextLines />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card>
                    <Typography align="center">
                            <CardHeader title="Concept" />
                        </Typography>
                    <CardContent>
                            <TextLines />
                            <TextLines />
                            <TextLines />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card>
                    <Typography align="center">
                            <CardHeader title="Idea" />
                        </Typography>
                    <CardContent>
                            <TextLines />
                            <TextLines />
                            <TextLines />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}

export default Home;