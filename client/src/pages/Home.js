import React from "react";
import Nav from "../components/Nav"
import Card from '@material-ui/core/Card';

function Home() {
    return (
    <div>
        <Nav />
        <Card>
            <p>Hello</p>
        </Card>
        <Card>
            <p>Wsup</p>
        </Card>
        <Card>
            <p>Yee!</p>
        </Card>
    </div>
    )
}

export default Home;