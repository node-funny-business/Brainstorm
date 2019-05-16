const router = require("express").Router();
const conceptRoutes = require("./concept");

// Concepts routes
router.use("/concepts", conceptRoutes);

module.exports = router;
