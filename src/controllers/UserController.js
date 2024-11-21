const UserService = require("../services/UserService");
const JwtService = require("../services/JwtService");
const User = require("../models/UserModel.js");

const createUser = async (req, res) => {
  try {
    const { name, email, password, confirmPassword, phone } = req.body;
    const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    const isCheckEmail = reg.test(email);
    if (!email || !password || !confirmPassword) {
      return res.status(200).json({
        status: "ERR",
        message: "The input is required",
      });
    } else if (!isCheckEmail) {
      return res.status(200).json({
        status: "ERR",
        message: "The input is email",
      });
    } else if (password !== confirmPassword) {
      return res.status(200).json({
        status: "ERR",
        message: "The password is equal confirmPassword",
      });
    }
    const response = await UserService.createUser(req.body);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const response = await UserService.loginUser(req.body);

    if (!response) {
      throw new Error("No response from UserService");
    }

    const { refresh_token, ...newReponse } = response;

    const safeRefreshToken = encodeURIComponent(refresh_token);
    res.cookie("refresh_token", safeRefreshToken, {
      httpOnly: true,
      secure: false, // Đảm bảo đây đúng cho môi trường phát triển
      sameSite: "Strict",
      path: "/",
    });

    return res.status(200).json({ ...newReponse, refresh_token });
  } catch (e) {
    console.error("Error in loginUser:", e);
    return res.status(500).json({
      status: "ERR",
      message: e.message || "Internal Server Error",
      stack: e.stack || "", // In thêm stack trace
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const data = req.body;
    if (!userId) {
      return res.status(200).json({
        status: "ERR",
        message: "The userId is required",
      });
    }
    const response = await UserService.updateUser(userId, data);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    if (!userId) {
      return res.status(200).json({
        status: "ERR",
        message: "The userId is required",
      });
    }
    const response = await UserService.deleteUser(userId);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const deleteMany = async (req, res) => {
  try {
    const { ids } = req.body;
    console.log(ids);
    if (!ids) {
      return res.status(200).json({
        status: "ERR",
        message: "The ids is required",
      });
    }
    const response = await UserService.deleteManyUser(ids);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const getAllUser = async (req, res) => {
  try {
    const response = await UserService.getAllUser();
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const getDetailsUser = async (req, res) => {
  try {
    const userId = req.params.id;
    if (!userId) {
      return res.status(400).json({
        status: "ERR",
        message: "The userId is required",
      });
    }

    const response = await UserService.getDetailsUser(userId);
    if (!response) {
      return res.status(404).json({
        status: "ERR",
        message: "User not found",
      });
    }

    return res.status(200).json(response);
  } catch (e) {
    console.error("Error fetching user details:", e);
    return res.status(500).json({
      message: "Internal server error",
      error: e.message,
    });
  }
};

const refreshToken = async (req, res) => {
  try {
    // Lấy token từ header Authorization
    const token = req.headers.authorization?.split(" ")[1];

    // Kiểm tra nếu token không tồn tại
    if (!token) {
      return res.status(400).json({
        status: "ERR",
        message: "Token is required",
      });
    }

    // Gọi service để làm mới token
    const response = await JwtService.refreshTokenJwtService(token);

    // Nếu response từ service thành công, trả về token mới
    if (response.status === "OK") {
      return res.status(200).json(response);
    } else {
      // Nếu có lỗi xảy ra trong việc làm mới token
      return res.status(401).json({
        status: "ERR",
        message: response.message || "Authentication failed",
      });
    }
  } catch (e) {
    // Xử lý các lỗi không mong muốn
    console.error(e); // Log lỗi ra server để dễ dàng kiểm tra
    return res.status(500).json({
      status: "ERR",
      message: "Internal server error",
    });
  }
};

const logoutUser = async (req, res) => {
  try {
    res.clearCookie("refresh_token");
    return res.status(200).json({
      status: "OK",
      message: "Logout successfully",
    });
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const searchUsers = async (req, res) => {
  try {
    const nameQuery = req.query.name; // Lấy tên từ query params
    if (!nameQuery) {
      return res.status(400).json({ error: "Search name is required" });
    }

    const users = await User.find({
      name: { $regex: nameQuery, $options: "i" }, // Tìm kiếm không phân biệt hoa thường
    });

    res.json(users);
  } catch (error) {
    console.error("Error during search:", error);
    res.status(500).json({ error: "Server error", details: error.message });
  }
};

module.exports = {
  createUser,
  loginUser,
  updateUser,
  deleteUser,
  getAllUser,
  getDetailsUser,
  refreshToken,
  logoutUser,
  deleteMany,
  searchUsers,
};
