import React from "react";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import BrainstormText from "../BrainstormText";
import ConceptText from "../ConceptText";
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

function BrainstormCard(props) {

  return (
    <Styled>{({ classes }) =>
    <Card className={classes.card1}>
      <CardHeader align="center"
        title={
          <BrainstormText
            // key={this.state.currbrainstorm.id}
            value={props.brainstormValue}
            onChange=
            {props.brainstormChange(
              "currbrainstorm", 0, "brainstorm")}
            onSubmit={props.brainstormSubmit(0)}
            id={props.id}
            typ3={"brainstorm"}
          />
        }
      >
      </CardHeader>
      <CardContent>
        {props.conceptArray.map((concept, i) => (
          <ConceptText
            key={concept.id}
            id={concept.id}
            onClick={props.selectConcept(i)}
            onChange={props.conceptChange("concept", i, "concept")}
            onSubmit={props.conceptSubmit(i)}
            value={concept.concept}
            typ3={"concept"}
          />
        ))}
      </CardContent>
    </Card>}
  </Styled>
  )
}

export default BrainstormCard