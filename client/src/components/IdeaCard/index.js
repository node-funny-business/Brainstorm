import React from "react";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IdeaText from "../IdeaText";
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import API from "../../utils/API";


function createStyled(styles, options) {
  function Styled(props) {
    const { children, ...other } = props;
    return children(other);
  }
  Styled.propTypes = {
    children: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
  };
  return withStyles(styles, options)(Styled);
}

const Styled = createStyled({
  card2: {
    backgroundColor: '#CFD8DC'
  }
});

class IdeaCard extends React.Component {

  ideaSubmit = index => event => {
    event.preventDefault();
    const idea = this.props.ideaArray;
    const id = idea[index].id;
    let updatedIdeas;
    if (id) {
      API.updateIdea(idea[index])
        .then(res =>
          updatedIdeas = idea.map(item => {
            if (item.id === res.data.id) {
              return res.data;
            }
            return item;
          })
        ).then(() => this.props.ideaUpdate(updatedIdeas))
        .catch(err => console.log(err));
    } else {
      let newData = this.ideaData(index)
      API.saveIdea(newData)
        .then(res =>
          this.props.ideaSave(res.data)
        )
        .catch(err => console.log(err));
    }
  };

  // Reassigns ideaData for axios
  ideaData = index => {
    let data = Object.assign({}, this.props.ideaArray[index], { ConceptId: this.props.conceptId });
    return data;
  }

  render() {
    return (
      <Styled>{({ classes }) =>
        <Card className={classes.card2}>
          <CardHeader align="center" title={this.props.title} />
          <CardContent>
            {this.props.ideaArray.map((idea, i) => (
              <IdeaText
                key={idea.id}
                id={idea.id}
                onClick={this.props.setIdea(i)}
                onChange={this.props.textChange("idea", i, "idea")}
                // onSubmit={this.props.hitEnter(i)}
                onSubmit={this.ideaSubmit(i)}
                value={idea.idea}
                typ3={"idea"}
              />
            ))}
          </CardContent>
        </Card>}
      </Styled>
    )
  }
}

export default IdeaCard