import React from "react";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import BrainstormText from "../BrainstormText";
import ConceptText from "../ConceptText";
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import API from "../../utils/API";

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

class BrainstormCard extends React.Component {

  conceptSubmit = index => event => {
    event.preventDefault();
    const concept = this.props.conceptArray;
    const id = concept[index].id
    let updatedConcepts;
    if (id) {
      API.updateConcept(concept[index])
        .then(res =>
          updatedConcepts = concept.map(item => {
            if (item.id === res.data.id) {
              return res.data;
            }
            return item;
          })
        ).then(() => this.props.conceptUpdate(updatedConcepts))
        .catch(err => console.log(err));
    } else {
      let newData = this.conceptData(index);
      API.saveConcept(newData)
        .then(res =>
          this.props.conceptSave(res.data)
          // console.log(res.data)
        )
        .catch(err => console.log(err));
    }
  };

  conceptData = index => {
    let data = Object.assign({}, this.props.conceptArray[index], { BrainstormId: this.props.id });
    // console.log("concept: " + this.state.currbrainstorm)
    return data;
  }
  render() {
    return (
      <Styled>{({ classes }) =>
        <Card className={classes.card1}>
          <CardHeader align="center"
            title={
              <BrainstormText
                // key={this.state.currbrainstorm.id}
                value={this.props.brainstormValue}
                onChange=
                {this.props.brainstormChange(
                  "currbrainstorm", 0, "brainstorm")}
                onSubmit={this.props.brainstormSubmit(0)}
                id={this.props.id}
                typ3={"brainstorm"}
              />
            }
          >
          </CardHeader>
          <CardContent>
            {this.props.conceptArray.map((concept, i) => (
              <ConceptText
                key={concept.id}
                id={concept.id}
                onClick={this.props.selectConcept(i)}
                onChange={this.props.conceptChange("concept", i, "concept")}
                // onSubmit={this.props.conceptSubmit(i)}
                onSubmit={this.conceptSubmit(i)}
                value={concept.concept}
                typ3={"concept"}
              />
            ))}
          </CardContent>
        </Card>}
      </Styled>
    )
  }
}

export default BrainstormCard