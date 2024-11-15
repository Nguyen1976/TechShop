const Address = require("../models/AddressModel");

const createAddress = async (req, res) => {
  const { userId, addressData } = req.body; // Lấy thông tin từ body
  console.log(userId, addressData);

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
    const addresses = await Address.find({ user: userId });
    // Kiểm tra nếu không tìm thấy địa chỉ nào
    if (addresses.length === 0) {
      return res
        .status(404)
        .json({ message: "No addresses found for this user." });
    }
    res.status(200).json(addresses);
  } catch (error) {
    console.error("Error fetching addresses:", error);
    res
      .status(500)
      .json({ message: "Error fetching addresses", error: error.message });
  }
};

module.exports = {
  createAddress,
  getAddress,
};