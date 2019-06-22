import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Input from "@material-ui/core/Input";
import Typography from "@material-ui/core/Typography";
import DeleteBtn from "../DeleteBtn/"
import TextField from "@material-ui/core/TextField";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit
  }
});




function BrainstormText(props) {

  const { classes } = props;

  return (
    <form
      className={classes.container}
      onSubmit={props.onSubmit}>
      {/* <DeleteBtn
        id={props.id}
        type3={props.typ3}
      /> */}
      <FormControl
        className={classes.formControl}
        fullWidth>
        <Input
          value={props.value}
          onChange={props.onChange}
          aria-describedby="component-helper-text"
          inputProps={{
            style: { textAlign: "center" }
          }}
        />
        <Typography>
          Add Brainstorm Here
        </Typography>
      </FormControl>
    </form>
  );
}

BrainstormText.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BrainstormText);
