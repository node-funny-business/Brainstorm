import React from "react";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import StepText from "../StepText";
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
  card3: {
    backgroundColor: '#EEEEEE'
  }
});

class StepCard extends React.Component {

  stepSubmit = index => event => {
    event.preventDefault();
    const step = this.props.stepArray;
    const id = step[index].id;
    let updatedSteps
    if (id) {
      API.updateStep(step[index])
        .then(res =>
            updatedSteps = step.map(item => {
              if (item.id === res.data.id) {
                return res.data;
              }
              return item;
            })
        ).then(() => this.props.stepUpdate(updatedSteps))
        .catch(err => console.log(err));
    } else {
      let newData = this.stepData(index)
      API.saveStep(newData)
        .then(res =>
          this.props.stepSave(res.data)
        )
        .catch(err => console.log(err));
    }
  };
  // Reassigns stepData for axios
  stepData = index => {
    let data = Object.assign({}, this.props.stepArray[index], { IdeaId: this.props.ideaId });
    return data;
  }

  render() {
    return (
      <Styled>{({ classes }) =>
        <Card className={classes.card3}>
          <CardHeader align="center" title={this.props.title} />
          <CardContent>
            {this.props.stepArray.map((step, i) => (
              <StepText
                key={step.id}
                id={step.id}
                onChange={this.props.textChange("step", i, "step")}
                onSubmit={this.stepSubmit(i)}
                value={step.step}
                typ3={"step"}
              />
            ))}
          </CardContent>
        </Card>}
      </Styled>
    )
  }
}

export default StepCard