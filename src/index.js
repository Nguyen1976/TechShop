const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors"); // Kết nối frontend và backend, cho phép frontend gửi yêu cầu đến backend từ một nguồn gốc khác mà không bị chặn bởi trình duyệt
const cookieParser = require("cookie-parser");

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

app.use(
  cors({
    origin: "http://localhost:3000", // URL frontend
    credentials: true, // Cho phép gửi cookie và thông tin xác thực
  })
);

app.use(express.json({ limit: "50mb" })); // Giới hạn kích thước JSON payload
app.use(express.urlencoded({ limit: "50mb", extended: true })); // Giới hạn kích thước form data payload và hỗ trợ cấu trúc dữ liệu phức tạp
app.use(cookieParser());

routes(app);

mongoose
  .connect(process.env.MONGO_DB)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err.message);
    console.log("Error connecting to MongoDB");
  });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Listening on port ${port}`);
});
