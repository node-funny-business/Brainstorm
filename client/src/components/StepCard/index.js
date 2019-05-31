import React from "react";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import StepText from "../StepText";
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';


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
});

function StepCard(props) {

  return (
    <Styled>{({ classes }) =>
    <Card className={classes.card3}>
      <CardHeader align="center" title={props.title} />
      <CardContent>
        {props.stepArray.map((step, i) => (
          <StepText
            key={step.id}
            id={step.id}
            onChange={props.textChange("step", i, "step")}
            onSubmit={props.hitEnter(i)}
            value={step.step}
            typ3={"step"}
            />
        ))}
      </CardContent>
    </Card>}
  </Styled>
  )
}

export default StepCard