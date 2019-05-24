import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Input from "@material-ui/core/Input";
import Typography from "@material-ui/core/Typography";
import DeleteBtn from "../DeleteBtn/"

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit
  }
});

function IdeaText(props) {
  // state = {
  //   name: "Composed TextField"
  // };

  // componentDidMount() {
  //   this.forceUpdate();
  // }

  const { classes } = props;

  return (
    <form
      className={classes.container}
      onSubmit={props.onSubmit}>
      {/* <DeleteBtn
        id={props.id}
        typ3={props.typ3} /> */}
      <FormControl
        className={classes.formControl}
        fullWidth>
        <Input
          id="component-helper"
          value={props.value}
          onChange={props.onChange}
          aria-describedby="component-helper-text"
          inputProps={{
            style: { textAlign: "center" }
          }}
        />
        {/* Testing state */}
        {/* <Typography>
          {props.value}
        </Typography> */}
        {/* <FormHelperText id="component-helper-text">
          Add Step Here
          </FormHelperText> */}
      </FormControl>
    </form>
  );
}

IdeaText.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(IdeaText);
