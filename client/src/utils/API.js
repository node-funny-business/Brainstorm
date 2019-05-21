import axios from "axios";

export default {
  // Gets all concepts
  getBrainstorm: function() {
    return axios.get("/api/brainstorm");
  },
  // Gets the concept with the given id
  getBrainstorm: function(id) {
    return axios.get("/api/brainstorm/" + id);
  },
  // Deletes the concept with the given id
  deleteBrainstorm: function(id) {
    return axios.delete("/api/brainstorm/" + id);
  },
  // Saves a concept to the database
  saveBrainstorm: function(brainstormData) {
    return axios.post("/api/brainstorm", brainstormData);
  }
};

