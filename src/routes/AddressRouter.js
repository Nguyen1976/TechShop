const express = require("express");
const router = express.Router();
const { authUserMiddleWare, authMiddleWare } = require("../middleware/authMiddleware.js");

const AddressController = require("../controllers/AddressControler.js");



router.post("/create-address/:userId", authUserMiddleWare, AddressController.createAddress);
router.get("/:userId", authUserMiddleWare, AddressController.getAddress);
router.put('/update-address/:addressId/:userId', authUserMiddleWare, AddressController.updateAddress);
router.get('/get-address-default/:userId', authUserMiddleWare, AddressController.getAddressDefault);
router.delete('/delete-address/:addressId/:userId', authUserMiddleWare, AddressController.deleteAddress);

module.exports = router;
