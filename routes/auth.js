const router = require("express").Router();

const {
  getOrder,
  addOrder,
  updateOrder,
  deleteOrder,
} = require("../controllers/createController");

router.get("/getdetails/:id", getOrder);
router.post("/neworder", addOrder);
router.put("/edit/:id", updateOrder);
router.delete("/delete/:id", deleteOrder);

module.exports = router;
