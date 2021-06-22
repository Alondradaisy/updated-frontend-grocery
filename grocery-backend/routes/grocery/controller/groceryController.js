const Grocery = require("../model/grocery");
const {
  getAllGroceries,
  createGrocery,
  updateGroceryById,
  deleteGroceryById,
} = require("../model/groceryRouter");
const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/get-all-groceries", function (req, res, next) {
  res.status;
});

module.exports = router;
