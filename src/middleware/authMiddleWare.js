const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

// Middleware kiểm tra quyền Admin
const authMiddleWare = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Kiểm tra nếu header authorization có tồn tại không
  if (!token) {
    return res.status(401).json({
      message: "Authentication token is required",
      status: "ERROR",
    });
  }

  jwt.verify(token, process.env.ACCESS_TOKEN, function (err, user) {
    if (err) {
      return res.status(403).json({
        message: "Invalid or expired token",
        status: "ERROR",
      });
    }

    if (user?.isAdmin) {
      next();
    } else {
      return res.status(403).json({
        message: "Access denied, Admin privileges required",
        status: "ERROR",
      });
    }
  });
};

// Middleware kiểm tra quyền truy cập của người dùng
const authUserMiddleWare = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Kiểm tra nếu header authorization có tồn tại không
  const userId = req.params.id || req.params.userId;

  if (!token) {
    return res.status(401).json({
      message: "No token provided",
      status: "ERROR",
    });
  }

  try {
    jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
      if (err) {
        return res.status(403).json({
          message: "Invalid or expired token",
          status: "ERROR",
        });
      }
      if (user?.isAdmin || user?.id === userId) {
        next();
      } else {
        return res.status(403).json({
          message:
            "Access denied, you do not have permission to access this resource",
          status: "ERROR",
        });
      }
    });
  } catch (error) {
    console.error("Error verifying token:", error.message); // In chi tiết lỗi
  }
};

module.exports = {
  authMiddleWare,
  authUserMiddleWare,
};
