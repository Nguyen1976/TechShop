const express = require("express");
const router = express.Router();
const { authUserMiddleWare, authMiddleWare } = require("../middleware/authMiddleware.js");

const AddressController = require("../controllers/AddressControler.js");



router.post("/create-address", authUserMiddleWare, AddressController.createAddress);
router.get("/:userId", authUserMiddleWare, AddressController.getAddress);
router.put('/update-address/:addressId', authUserMiddleWare, AddressController.updateAddress);
router.get('/get-address-default/:userId', authUserMiddleWare, AddressController.getAddressDefault)

module.exports = router;
