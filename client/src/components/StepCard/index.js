import React from "react";
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import StepText from "../StepText"
// import classNames from 'classnames';

function StepCard(props) {
  return (
    <Card>
      <Typography align="center">
        <CardHeader title={props.title} />
      </Typography>
      <CardContent>
        <StepText
          onChange={props.onChange}
          onSubmit={props.onSubmit}
          value={props.value} />
      </CardContent>
    </Card>
  );
}

export default StepCard;