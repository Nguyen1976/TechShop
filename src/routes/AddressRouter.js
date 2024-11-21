const express = require("express");
const router = express.Router();

const AddressController = require("../controllers/AddressControler");

const { authUserMiddleWare } = require("../middleware/authMiddleware");


router.post("/create-address", authUserMiddleWare, AddressController.createAddress);
router.get("/:userId", authUserMiddleWare, AddressController.getAddress);
router.put('/update-address/:addressId', AddressController.updateAddress);
router.get('/get-address-default/:userId', AddressController.getAddressDefault)

module.exports = router;
