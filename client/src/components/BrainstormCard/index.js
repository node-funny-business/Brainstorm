import React from "react";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import BrainstormText from "../BrainstormText";
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

function IdeaCard(props) {

  return (
    <Styled>{({ classes }) =>
      <Card className={classes.card2}>
        <CardHeader align="center" title={props.title} />
        <CardContent>
          {props.ideaArray.map((idea, i) => (
            <BrainstormText
              key={idea.id}
              id={idea.id}
              onClick={props.setIdea(i)}
              onChange={props.textChange("idea", i, "idea")}
              onSubmit={props.hitEnter(i)}
              value={idea.idea}
              typ3={"idea"}
            />
          ))}
        </CardContent>
      </Card>}
    </Styled>
  )
}

export default IdeaCard