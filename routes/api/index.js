const router = require("express").Router();
const brainstormRoutes = require("./brainstorm");

// Book routes
router.use("/brainstorm", brainstormRoutes);

module.exports = router;
