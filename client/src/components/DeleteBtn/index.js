import React from "react";
import "./style.css";
import API from "../../utils/API"




function DeleteBtn(props) {

  const deleteLine = (id) => () => {
    switch (props.typ3) {
      case "brainstorm":
        // API.deleteBrainstorm(id)
        //   .then(res => window.location.reload())
        //   .catch(err => console.log(err))
        alert(`clicked`)
        break;
      case "concept":
        API.deleteConcept(id)
          .then(res => window.location.reload())
          .catch(err => console.log(err))
        break;
      case "idea":
        API.deleteIdea(id)
          .then(res => window.location.reload())
          .catch(err => console.log(err))
        break;
      case "step":
        API.deleteStep(id)
          .then(res => window.location.reload())
          .catch(err => console.log(err))
        break;
      default:
    }
  }

  return (
    <span
      className="delete-btn"
      role="button"
      tabIndex="0"
      onClick={deleteLine(props.id)}
      >
      ✗
    </span>
  );
}

export default DeleteBtn;
