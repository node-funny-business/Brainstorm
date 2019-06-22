import React, { Component } from "react";
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardHeader from '@material-ui/core/CardHeader';
import { CardContent } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';


const styles = theme => ({
  card: {
    marginTop: theme.spacing.unit * 8
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  }
})


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

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={3} />
          <Grid item xs={6}>
            <Card
              className={classes.card}
            >
              <Typography align="center">
                <CardHeader title="My Brainstorms" />
              </Typography>
              <CardContent align="center">
                {this.state.brainstorm.map((brainstorm) => (
                  <Typography align="center">
                    <Link
                      to={"/main/" + brainstorm.id}
                      component="button">{brainstorm.name}
                    </Link>
                  </Typography>
                ))}
                <Button
                  href="/main"
                  variant="contained"
                  className={classes.button}>
                  Create New Brainstorm</Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    )
  }
}

Brainstorms.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Brainstorms);
