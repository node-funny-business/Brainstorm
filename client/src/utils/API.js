import axios from "axios";

export default {
  // Gets all concepts
  getConcepts: function() {
    return axios.get("/api/concepts");
  },
  // Gets the concept with the given id
  getConcept: function(id) {
    return axios.get("/api/concept/" + id);
  },
  // Deletes the concept with the given id
  deleteConcept: function(id) {
    return axios.delete("/api/concept/" + id);
  },
  // Saves a concept to the database
  saveConcept: function(conceptData) {
    return axios.post("/api/concepts", conceptData);
  },
  // Updates concept in database
  updateConcept: function(id) {
    return axios.post("/api/concepts", id);
  }
};

