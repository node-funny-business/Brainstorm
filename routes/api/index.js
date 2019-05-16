const router = require("express").Router();
const conceptRoutes = require("./concept");

// Book routes
router.use("/concept", conceptRoutes);

module.exports = router;
