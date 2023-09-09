const express = require("express");
const router = express.Router();
const controller = require("../controller/controller_setAlat");

router.post("/input", controller.create);
router.get("/get", controller.getAll);
router.get("/getbyuser/:id", controller.getAllByUser);
router.get("/getbyid/:id", controller.getAllByID);
router.get("/get/:id", controller.getById);
router.put("/edit/:id", controller.updateOne);
router.delete("/delete/:id", controller.deleteOne);
router.get("/count", controller.getCount);
router.get("/count/:id", controller.getCountUser);

module.exports = router;
