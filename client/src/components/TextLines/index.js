import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Input from "@material-ui/core/Input";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit
  }
});

class TextLines extends React.Component {
  // state = {
  //   name: "Composed TextField"
  // };

  componentDidMount() {
    this.forceUpdate();
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <FormControl className={classes.formControl}>
          <Input
            id="component-helper"
            value="Concept/Idea/Step"
            onChange={this.handleChange}
            aria-describedby="component-helper-text"
          />

          <FormHelperText id="component-helper-text">
            Add Concept/Idea/Step Here
          </FormHelperText>
        </FormControl>
      </div>
    );
  }
}

TextLines.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TextLines);
