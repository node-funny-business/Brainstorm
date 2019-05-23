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



function ConceptText(props) {

    const { classes } = props;

    return (
        <form
            className={classes.container}
            onSubmit={props.onSubmit}>
            <DeleteBtn />
            <FormControl
                className={classes.formControl}
                fullWidth>
                <Input
                    onClick={props.onClick}
                    id="component-helper"
                    value={props.value}
                    onChange={props.onChange}
                    aria-describedby="component-helper-text"
                />
                {/* Testing state */}
                {/* <Typography>
                    {props.value}
                </Typography> */}
                {/* <FormHelperText id="component-helper-text">
                    Add Concept Here
                </FormHelperText> */}
            </FormControl>
        </form>
    );
}

ConceptText.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ConceptText);
