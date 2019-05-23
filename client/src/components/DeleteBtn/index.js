import React from "react";
import "./style.css";
import API from "../../utils/API"




function DeleteBtn(props) {

  // delete = (id) => {
  //   switch (props.typ3) {
  //     case "brainstorm":
  //       API.deleteBrainstorm(id)
  //         .then(res => console.log(res))
  //         .catch(err => console.log(err))
  //       break;
  //     case "concept":
  //       API.deleteConcept(id)
  //         .then(res => console.log(res))
  //         .catch(err => console.log(err))
  //       break;
  //     case "idea":
  //       API.deleteIdea(id)
  //         .then(res => console.log(res))
  //         .catch(err => console.log(err))
  //       break;
  //     case "step":
  //       API.deleteStep(id)
  //         .then(res => console.log(res))
  //         .catch(err => console.log(err))
  //       break;
  //     default:
  //   }
  // }

  return (
    <span
      className="delete-btn"
      role="button"
      tabIndex="0"
      // onClick={this.delete(props.id)}
      >
      ✗
    </span>
  );
}

export default DeleteBtn;
