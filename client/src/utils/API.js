import axios from "axios";
import { object } from "prop-types";

export default {
  // Gets all concepts
  getAllBrainstorm: function() {
    return axios.get("/api/brainstorm");
  },
  // Gets the concept with the given id
  getBrainstorm: function(id) {
    return axios.get("/api/brainstorm/id/" + id);
  },
  // Deletes the concept with the given id
  deleteBrainstorm: function(id) {
    return axios.delete("/api/brainstorm/id/" + id);
  },
  // Saves a concept to the database
  saveBrainstorm: function(brainstormData) {
    // return axios.post("/api/brainstorm/save", brainstormData);
    return new Promise ((resolve, reject) => {
      resolve({data: Object.assign({}, brainstormData, {id:7})})
    });
  },
  updateBrainstorm: function(brainstormData) {
    return axios.put('/api/brainstorm/id/' + brainstormData.id, brainstormData)
<<<<<<< HEAD
  }, //???
=======
  },
>>>>>>> 95ed6483be0cd9fb61aeadbfe643ca057c8a3d96
  getAllConcepts: function(brainstorm_id) {
    return axios.get("/api/concept/brainstorm/" + brainstorm_id);
  },
  getConcept: function(id) {
    return axios.get("/api/concept/id/" + id);
  },
  saveConcept: function(conceptData) {
    // return axios.post('/api/concept/save/', conceptData);
    return new Promise ((resolve, reject) => {
      resolve({data: Object.assign({}, conceptData, {id:7})})
    });
  },
  updateConcept: function(conceptData) {
    return axios.put('/api/concept/id/' + conceptData.id, conceptData)
  },
  deleteConcept: function(id) {
    return axios.delete("/api/concept/id/" + id);
  },
  getAllIdeas: function(concept_id) {
    return axios.get("/api/idea/concept/" + concept_id);
  },
  getIdea: function(id) {
    return axios.get("/api/idea/id/" + id);
  },
  saveIdea: function(ideaData) {
    // return axios.post('/api/idea/save/', IdeaData);
    return new Promise ((resolve, reject) => {
      resolve({data: Object.assign({}, ideaData, {id:7})})
    });
  },
  deleteIdea: function(id) {
    return axios.delete("/api/idea/id/" + id);
  },
  getAllSteps: function(idea_id) {
    return axios.get("/api/step/idea/" + idea_id);
  },
  getStep: function(id) {
    return axios.get("/api/step/id/" + id);
  },
  saveStep: function(stepData) {
    // return axios.post('/api/step/save/', StepData);
    return new Promise ((resolve, reject) => {
      resolve({data: Object.assign({}, stepData, {id:7})})
    });
  },
  deleteStep: function(id) {
    return axios.delete("/api/step/id/" + id);
  },
};

