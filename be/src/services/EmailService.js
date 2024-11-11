const nodemailer = require("nodemailer");//Thư viện
const dotenv = require("dotenv");
dotenv.config();
var inlineBase64 = require("nodemailer-plugin-inline-base64");//giúp chèn ảnh vào email mà không cần đường dẫn bên ngoài

const sendEmailCreateOrder = async (email, orderItems) => {
  let transporter = nodemailer.createTransport({//Tạo kết nối với Gmail bằng nodemailer.createTransport
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.MAIL_ACCOUNT, // generated ethereal user
      pass: process.env.MAIL_PASSWORD, // generated ethereal password
    },
  });
  transporter.use("compile", inlineBase64({ cidPrefix: "somePrefix_" }));

  let listItem = "";
  const attachImage = [];
  orderItems.forEach((order, index) => {
    const imageCid = `image${index}`; // tạo CID riêng cho mỗi hình ảnh
    listItem += `
    <tr>
      <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">
        <b>${order.name}</b>
      </td>
      <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">
        ${order.amount}
      </td>
      <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">
        ${order.price} VND
      </td>
      <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">
        <img src="cid:${imageCid}" style="max-width: 100px; height: auto;" alt="Product Image"/>
      </td>
    </tr>`;
    attachImage.push({ path: order.image, cid: imageCid }); // Đảm bảo CID khớp
  });

  // gửi email với đối tượng transport đã được định nghĩa
  await transporter.sendMail({
    from: process.env.MAIL_ACCOUNT, // địa chỉ người gửi
    to: email, // danh sách người nhận
    subject: "Bạn đã đặt hàng thành công tại shop", // dòng tiêu đề
    text: "Hello world?", // nội dung văn bản thuần
    html: `
      <html>
        <body style="font-family: Arial, sans-serif; background-color: #f4f4f9; color: #333;">
          <div style="max-width: 600px; margin: auto; background-color: #fff; padding: 20px; border-radius: 8px; border: 1px solid #ddd;">
            <h2 style="text-align: center; color: #4CAF50;">Cảm ơn bạn đã mua hàng tại Shop Pe!</h2>
            <p style="font-size: 16px; text-align: center; color: #555;">
              Chúng tôi rất vui thông báo rằng bạn đã đặt hàng thành công. Dưới đây là chi tiết đơn hàng của bạn:
            </p>
            <table style="width: 100%; margin-top: 20px; border-collapse: collapse;">
              <thead>
                <tr>
                  <th style="padding: 10px; border: 1px solid #ddd; background-color: #f1f1f1; text-align: center;">Sản phẩm</th>
                  <th style="padding: 10px; border: 1px solid #ddd; background-color: #f1f1f1; text-align: center;">Số lượng</th>
                  <th style="padding: 10px; border: 1px solid #ddd; background-color: #f1f1f1; text-align: center;">Giá</th>
                  <th style="padding: 10px; border: 1px solid #ddd; background-color: #f1f1f1; text-align: center;">Hình ảnh</th>
                </tr>
              </thead>
              <tbody>
                ${listItem}
              </tbody>
            </table>
            <p style="font-size: 16px; color: #555; text-align: center; margin-top: 20px;">
              Nếu có bất kỳ thắc mắc nào, vui lòng liên hệ với chúng tôi qua email này.
            </p>
            <p style="font-size: 14px; text-align: center; color: #888; margin-top: 30px;">
              Shop Pe - Địa chỉ cửa hàng, Số điện thoại, Email
            </p>
          </div>
        </body>
      </html>
    `,
    attachments: attachImage,//attachments: Bao gồm danh sách ảnh sản phẩm, mỗi ảnh có một CID duy nhất khớp với cid trong HTML
  });
};

module.exports = {
  sendEmailCreateOrder,
};
