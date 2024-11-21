const Address = require("../models/AddressModel");

const updateAddress = (addressId, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkAddress = await Address.findOne({ _id: addressId });
      if (checkAddress === null) {
        resolve({
          status: "ERR",
          message: "The user is not defined",
        });
        return;
      }
      if (data.default === true) {
        // Đặt tất cả các address khác về `default: false`
        await Address.updateMany(
          { _id: { $ne: addressId } }, // Điều kiện: tất cả các address khác
          { $set: { default: false } } // Cập nhật default thành false
        );
      }

      const updateAddress = await Address.findByIdAndUpdate(addressId, data, {
        new: true,
      });
      resolve({
        status: "OK",
        message: "Success",
        data: updateAddress,
      });
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  updateAddress,
};
