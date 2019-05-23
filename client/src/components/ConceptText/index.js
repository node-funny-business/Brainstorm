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
    // handleKeyPress = (event) => {
    //     if (event.key == 'Enter') {
    //         // console.log('enter press here! ')
    //         props.onKeyPress
    //     }
    // }

    return (
        <div className={classes.container}>
            <DeleteBtn />
            <FormControl
                className={classes.formControl}
                // onSubmit={props.handleConceptSubmit}
                fullWidth>
                <Input
                    onClick={props.onClick}
                    id="component-helper"
                    value={props.value}
                    onChange={props.onChange}
                    // onKeyPress={this.handleKeyPress}
                    aria-describedby="component-helper-text"
                />
                {/* Testing state */}
                {/* <Typography>
                    {props.value}
                </Typography> */}
                <FormHelperText id="component-helper-text">
                    Add Concept Here
                </FormHelperText>
            </FormControl>
        </div>
    );
}

ConceptText.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ConceptText);
