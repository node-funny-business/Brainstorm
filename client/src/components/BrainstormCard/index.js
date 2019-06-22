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
  }
});

class BrainstormCard extends React.Component {

  brainstormSubmit = index => event => {
    event.preventDefault();
    // const brainstorm = this.props.brainstorm;
    const id = this.props.id
    const value = this.props.brainstormValue
    if (id) {
      API.updateBrainstorm({ brainstorm: value, id: id })
        .then(res =>
          this.props.brainstormUpdate(res.data)
          // this.setState({
          //   currbrainstorm: res.data
          // })
        )
        .catch(err => console.log(err));
    } else {
      API.saveBrainstorm({ brainstorm: value })
        .then(res =>
          this.props.brainstormSave(res.data)
        )
        .catch(err => console.log(err));
    }
  };

  conceptSubmit = index => event => {
    event.preventDefault();
    const concept = this.props.conceptArray;
    const id = concept[index].id;
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
                onSubmit={this.brainstormSubmit(0)}
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