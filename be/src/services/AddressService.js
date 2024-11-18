const Address = require("../models/AddressModel");

const updateAddress = (addressId, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkAddress = await Address.findOne({ _id: addressId }).lean();
      if (checkAddress === null) {
        resolve({
          status: "ERR",
          message: "The user is not defined",
        });
        return;
      }
      const updateAddress = await Address.findByIdAndUpdate(addressId, data, {
        new: true,
      }).lean();
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
