import React from "react";
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
// import classNames from 'classnames';

function Cards() {
  return (
    <Card>
      <CardHeader title={"Topic"} titleTypographyProps={{ align: 'center' }} />
      <CardContent>
        <div>
          <Typography align={"center"}>
            <TextField
              id="outlined-dense"
              label="Concept"
              // className={classNames(classes.textField, classes.dense)}
              margin="dense"
              variant="outlined"
            />
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
}

export default Cards;