import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Input from "@material-ui/core/Input";
import Typography from "@material-ui/core/Typography";


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
    // state = {
    //   name: "Composed TextField"
    // };

    // componentDidMount() {
    //     this.forceUpdate();
    // }


    const { classes } = props;

    return (
        <div className={classes.container}>
            <FormControl className={classes.formControl}>
                <Input
                    id="component-helper"
                    value={props.value}
                    onChange={props.onChange}
                    aria-describedby="component-helper-text"
                />
                {/* Testing state */}
                <Typography>
                    {props.value}
                </Typography>
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
