import React from "react";
import Nav from "../components/Nav"
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';

function Home() {
    return (
        <div>
            <Nav />
            <Grid container spacing={24}>
                <Grid item xs={4}>
                    <Card>
                        <p>Hello</p>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card>
                        <p>Wsup</p>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card>
                        <p>Yee!</p>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}

export default Home;