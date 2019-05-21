import React from "react";
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import ConceptText from "../ConceptText"
// import classNames from 'classnames';

function ConceptCard(props) {
  return (
    <Card>
      <Typography align="center">
        <CardHeader title={props.title} />
      </Typography>
      <CardContent>
      <ConceptText
          onChange={props.onChange}
          onSubmit={props.onSubmit}
          value={props.value} />
      </CardContent>
    </Card>
  );
}

export default ConceptCard;