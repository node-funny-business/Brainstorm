import React from "react";
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardHeader from '@material-ui/core/CardHeader';
import { CardContent } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import DanielImg from '../images/DanielOlson.jpg'
import JonImg from '../images/JonatanViera.jpg'
import JasonImg from '../images/JasonLee.jpg'



function createStyled(styles, options) {
  function Styled(props) {
    const { children, ...other } = props;
    return children(other);
  }
  Styled.propTypes = {
    children: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
  };
  return withStyles(styles, options)(Styled);
}

const Styled = createStyled({
  card1: {
    backgroundColor: '#D7CCC8'
  },
  card2: {
    backgroundColor: '#CFD8DC'
  },
  card3: {
    backgroundColor: '#EEEEEE'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  }
});

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
          <Styled>{({ classes }) =>
            <Card className={classes.card1}>
              <Typography align="center">
                <CardHeader title="Daniel Olson" />
              </Typography>
              <CardMedia
                className={classes.media}
                image={DanielImg}
                title="Daniel Olson"
              />
              <CardContent>
                <Typography component="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </Typography>
                <div><br /></div>
                <Grid container spacing={24}>
                  <Grid align="center" item xs={4}>
                    <a href="#">
                      <img height="32" width="32" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg" />
                    </a>
                  </Grid>
                  <Grid align="center" item xs={4}>
                    <a href="#">
                      <img height="32" width="32" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/linkedin.svg" />
                    </a>
                  </Grid>
                  <Grid align="center" item xs={4}>
                    <a href="#">
                      <img height="32" width="32" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/gmail.svg" />
                    </a>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>}
          </Styled>
        </Grid>
        <Grid item xs={4}>
          <Styled>{({ classes }) =>
            <Card className={classes.card2}>
              <Typography align="center">
                <CardHeader title="Jonatan Viera" />
              </Typography>
              <CardMedia
                className={classes.media}
                image={JonImg}
                title="Jonatan Viera"
              />
              <CardContent>
                <Typography component="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Typography>
                <div><br /></div>
                <Grid container spacing={24}>
                  <Grid align="center" item xs={4}>
                    <a href="#">
                      <img height="32" width="32" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg" />
                    </a>
                  </Grid>
                  <Grid align="center" item xs={4}>
                    <a href="#">
                      <img height="32" width="32" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/linkedin.svg" />
                    </a>
                  </Grid>
                  <Grid align="center" item xs={4}>
                    <a href="#">
                      <img height="32" width="32" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/gmail.svg" />
                    </a>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>}
          </Styled>
        </Grid>
        <Grid item xs={4}>
          <Styled>{({ classes }) =>
            <Card className={classes.card3}>
              <Typography align="center">
                <CardHeader title="Jason Lee" />
              </Typography>
              <CardMedia
                className={classes.media}
                image={JasonImg}
                title="Jason Lee"
              />
              <CardContent>
                <Typography component="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </Typography>
                <div><br /></div>
                <Grid container spacing={24}>
                  <Grid align="center" item xs={4}>
                    <a href="#">
                      <img height="32" width="32" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg" />
                    </a>
                  </Grid>
                  <Grid align="center" item xs={4}>
                    <a href="#">
                      <img height="32" width="32" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/linkedin.svg" />
                    </a>
                  </Grid>
                  <Grid align="center" item xs={4}>
                    <a href="#">
                      <img height="32" width="32" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/gmail.svg" />
                    </a>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>}
          </Styled>
        </Grid>
      </Grid>
    </div>
  )
}

export default withStyles(styles)(AboutUs);