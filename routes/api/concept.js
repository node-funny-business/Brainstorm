const router = require("express").Router();
const brainstormController = require("../../controllers/brainstormController");

// Matches with "/api/books"
router.route("/")
  .get(brainstormController.findAll)
  .post(brainstormController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(brainstormController.findById)
  .put(brainstormController.update)
  .delete(brainstormController.remove);

module.exports = router;
