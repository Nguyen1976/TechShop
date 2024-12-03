const Address = require("../models/AddressModel");
const AddressService = require("../services/AddressService");

const createAddress = async (req, res) => {
  const { userId, addressData } = req.body; // Lấy thông tin từ body
  // Kiểm tra xem userId và addressData có đầy đủ không
  if (!userId || !addressData) {
    return res
      .status(400)
      .json({ message: "User ID and address data are required." });
  }

  try {
    // Tạo một đối tượng Address mới với thông tin nhận được
    const newAddress = new Address({
      user: userId, // ID người dùng
      ...addressData, // Các trường khác như name, city, district, v.v.
    });

    console.log(newAddress);

    // Lưu đối tượng Address vào cơ sở dữ liệu
    await newAddress.save();

    // Trả về thông tin địa chỉ đã được tạo
    res.status(201).json(newAddress);
  } catch (error) {
    console.error("Error creating address:", error);
    res
      .status(500)
      .json({ message: "Error creating address", error: error.message });
  }
};

const getAddress = async (req, res) => {
  const { userId } = req.params;
  try {
    // Lấy danh sách địa chỉ với phân trang
    const addresses = await Address.find({ user: userId }).sort({
      default: -1,
    });

    // Trả về các địa chỉ cùng thông tin phân trang (ví dụ: page, limit)
    res.status(200).json({
      addresses,
    });
  } catch (error) {
    console.error("Error fetching addresses:", error);
    res
      .status(500)
      .json({ message: "Error fetching addresses", error: error.message });
  }
};

const getAddressDefault = async (req, res) => {
  const { userId } = req.params;
  try {
    const addresses = await Address.find({ user: userId, default: true });
    // Kiểm tra nếu không tìm thấy địa chỉ nào
    if (addresses.length === 0) {
      return res
        .status(404)
        .json({ message: "No addresses found for this user." });
    }
    res.status(200).json(addresses[0]);
  } catch (error) {
    console.error("Error fetching addresses:", error);
    res
      .status(500)
      .json({ message: "Error fetching addresses", error: error.message });
  }
};

const updateAddress = async (req, res) => {
  const { addressId } = req.params;
  const data = req.body;
  try {
    const respon = await AddressService.updateAddress(addressId, data);
    if (respon && respon.data) {
      // Trả về dữ liệu đã được lọc
      res.status(200).json({
        status: respon.status,
        message: respon.message,
        data: respon.data.toObject ? respon.data.toObject() : respon.data,
      });
    } else {
      res.status(404).json({ message: "Address not found" });
    }
  } catch (error) {
    console.error("Error updating address:", error);
    res
      .status(500)
      .json({ message: "Error updating address", error: error.message });
  }
};

const deleteAddress = async (req, res) => {
  const { addressId } = req.params;
  try {
    await Address.deleteOne({ _id: addressId });

    res.status(200).json({
      message: "delete address successfully",
    });
  } catch (error) {
    console.error("Error deleting address:", error);
    res
      .status(500)
      .json({ message: "Error deleting address", error: error.message });
  }
};

module.exports = {
  createAddress,
  getAddress,
  updateAddress,
  getAddressDefault,
  deleteAddress,
};
