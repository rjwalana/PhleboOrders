const router = require("express").Router();

const {
  getAllOrders,
  getOrder,
  createOrder,
  updateOrder,
  deleteOrder,
  paginatedOrders,
  upload,
  download,
} = require("../controllers/apiController");

router.get("/", getAllOrders);
router.get("/:id", getOrder);
router.post("/", createOrder);
router.put("/:id", updateOrder);
router.delete("/:id", deleteOrder);
router.get("/paginate/:page/:limit", paginatedOrders);
router.post("/upload", upload);
router.get("/download", download);

module.exports = router;
