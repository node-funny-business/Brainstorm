import React from "react";
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardHeader from '@material-ui/core/CardHeader';
import { CardContent } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
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
    paddingTop: '56.25%',
  }
});

const styles = () => ({
  media: {
    height: 0,
    paddingTop: '56.25%',
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
                  Hi, my name is Daniel Olson. I am 25 and a Full Stack developer based in southern California. I enjoy a good game of Magic the Gathering, PC gaming and long walks on the beach. Visit any of my links if youd like to know more.
                  </Typography>
                <div><br /></div>
                <Grid container spacing={24}>
                  <Grid align="center" item xs={4}>
                    <a href="https://github.com/Dolson809">
                      <img height="32" width="32" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg" />
                    </a>
                  </Grid>
                  <Grid align="center" item xs={4}>
                    <a href="https://www.linkedin.com/in/daniel-olson-1792a617a/">
                      <img height="32" width="32" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/linkedin.svg" />
                    </a>
                  </Grid>
                  <Grid align="center" item xs={4}>
                    <a href="mailto:Sanjose1994@gmail.com">
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
                  My name is John Viera and I'm a fullstack developer based in Southern California. I enjoy working out, motorcycles and going fast, and playing basketball with friends. I decided to learning web development because I like creating things with my hands and with coding I get to do just that. Plus the money's good too...
                </Typography>
                <div><br /></div>
                <Grid container spacing={24}>
                  <Grid align="center" item xs={4}>
                    <a href="https://github.com/GoonSquad88">
                      <img height="32" width="32" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg" />
                    </a>
                  </Grid>
                  <Grid align="center" item xs={4}>
                    <a href="www.linkedin.com/in/jonatan-viera-cendejas-00252b180">
                      <img height="32" width="32" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/linkedin.svg" />
                    </a>
                  </Grid>
                  <Grid align="center" item xs={4}>
                    <a href="mailto:johnny05la@gmail.com">
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
                  I'm a lifelong learner that is continually fascinated by the internet and the underpinnings of its construction. What technologies are used to build a given page? What methodologies can be combined to improve its functionality and usability?
  
                  These are the questions that constantly fuel my curiosity and passion for Web Development. Whether I'm engineering Back-End processes or creating an intuitive User Interface, my goal as a programmer is to share my excitement for coding through executing my tasks and projects.
                  </Typography>
                <div><br /></div>
                <Grid container spacing={24}>
                  <Grid align="center" item xs={4}>
                    <a href="https://github.com/jasonklee89">
                      <img height="32" width="32" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg" />
                    </a>
                  </Grid>
                  <Grid align="center" item xs={4}>
                    <a href="https://www.linkedin.com/in/jason-lee-a607b217a/">
                      <img height="32" width="32" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/linkedin.svg" />
                    </a>
                  </Grid>
                  <Grid align="center" item xs={4}>
                    <a href="mailto:jasonkellogglee@gmail.com">
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