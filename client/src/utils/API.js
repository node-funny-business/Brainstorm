import axios from "axios";

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
    return axios.post("/api/brainstorm/save/", brainstormData);
  },
  updateBrainstorm: function(brainstormData) {
    return axios.put('/api/brainstorm/id/', brainstormData)
  }, 
  getAllConcepts: function(BrainstormId) {
    return axios.get("/api/concept/brainstorm/" + BrainstormId);
  },
  getConcept: function(id) {
    return axios.get("/api/concept/id/" + id);
  },
  saveConcept: function(conceptData) {
    return axios.post('/api/concept/save/', conceptData);
  },
  updateConcept: function(conceptData) {
    return axios.put('/api/concept/id/', conceptData)
  },
  deleteConcept: function(id) {
    return axios.delete("/api/concept/id/" + id);
  },
  getAllIdeas: function(ConceptId) {
    return axios.get("/api/idea/concept/" + ConceptId);
  },
  getIdea: function(id) {
    return axios.get("/api/idea/id/" + id);
  },
  saveIdea: function(IdeaData) {
    return axios.post('/api/idea/save/', IdeaData);
  },
  updateIdea: function(ideaData) {
    return axios.put('/api/idea/id/', ideaData)
  },
  deleteIdea: function(id) {
    return axios.delete("/api/idea/id/" + id);
  },
  getAllSteps: function(IdeaId) {
    return axios.get("/api/step/idea/" + IdeaId);
  },
  getStep: function(id) {
    return axios.get("/api/step/id/" + id);
  },
  saveStep: function(StepData) {
    return axios.post('/api/step/save/', StepData);
  },
  updateStep: function(stepData) {
    return axios.put('/api/step/id/', stepData)
  },
  deleteStep: function(id) {
    return axios.delete("/api/step/id/" + id);
  },
};

