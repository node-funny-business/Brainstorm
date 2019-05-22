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
    // state = {
    //   name: "Composed TextField"
    // };

    // componentDidMount() {
    //     this.forceUpdate();
    // }


    const { classes } = props;

    return (
        <div className={classes.container}>
            <FormControl 
            className={classes.formControl}
            onSubmit={props.handleBrainstormSubmit}
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
                <Typography>
                    Add Brainstorm Here
                </Typography>
            </FormControl>
            <DeleteBtn />
        </div>
    );
}

BrainstormText.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BrainstormText);
