const router = require("express").Router();
const conceptController = require("../../controllers/conceptController");

// Matches with "/api/books"
router.route("/")
  .get(conceptController.findAll)
  .post(conceptController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(conceptController.findById)
  .put(conceptController.update)
  //possibly remove this method
  .delete(conceptController.remove);

module.exports = router;
