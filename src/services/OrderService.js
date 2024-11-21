const Order = require("../models/OrderProduct");
const Product = require("../models/ProductModel");
const EmailService = require("../services/EmailService");

const createOrder = (newOrder) => {
  return new Promise(async (resolve, reject) => {
    const {
      orderItems,
      paymentMethod,
      itemsPrice,
      shippingPrice,
      totalPrice,
      shippingAddress,
      user,
      isPaid,
      paidAt,
    } = newOrder;
    try {
      const promises = orderItems.map(async (order) => {
        console.log(`Processing order item: ${order.product}`);
        try {
          const productData = await Product.findOneAndUpdate(
            {
              _id: order.product,
              countInStock: { $gte: order.amount },
            },
            {
              $inc: {
                countInStock: -order.amount,
                selled: +order.amount,
              },
            },
            { new: true }
          );

          if (productData) {
            return {
              status: "OK",
              message: "SUCCESS",
            };
          } else {
            console.error(
              `Product with id ${order.product} is out of stock or not found.`
            );
            return {
              status: "ERR",
              message: "ERR",
              id: order.product,
            };
          }
        } catch (productError) {
          console.error(
            `Error updating product ${order.product}: `,
            productError
          );
          return {
            status: "ERR",
            message: "ERR",
            id: order.product,
            error: productError.message,
          };
        }
      });

      const results = await Promise.all(promises);
      const newData = results && results.filter((item) => item.id);
      if (newData.length) {
        const arrId = [];
        newData.forEach((item) => {
          arrId.push(item.id);
        });
        resolve({
          status: "ERR",
          message: `San pham voi id: ${arrId.join(",")} khong du hang`,
        });
      } else {
        const createdOrder = await Order.create({
          orderItems,
          shippingAddress,
          paymentMethod,
          itemsPrice,
          shippingPrice,
          totalPrice,
          user: user,
          isPaid,
          paidAt,
        });

        if (createdOrder) {
          try {
            await EmailService.sendEmailCreateOrder('nguyen2202794@gmail.com', orderItems);
            resolve({
              status: "OK",
              message: "success",
            });
          } catch (emailError) {
            console.error(`Error sending email: `, emailError);
            reject({
              status: "ERR",
              message: "Email sending failed",
              error: emailError.message,
            });
          }
        } else {
          console.error("Failed to create the order in database");
          reject({
            status: "ERR",
            message: "Failed to create order",
          });
        }
      }
    } catch (e) {
      console.error("Error in creating order: ", e);
      reject({
        status: "ERR",
        message: "Unexpected error occurred",
        error: e.message,
      });
    }
  });
};

// const deleteManyProduct = (ids) => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             await Product.deleteMany({ _id: ids })
//             resolve({
//                 status: 'OK',
//                 message: 'Delete product success',
//             })
//         } catch (e) {
//             reject(e)
//         }
//     })
// }

const getAllOrderDetails = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const order = await Order.find({
        user: id,
      }).sort({ createdAt: -1, updatedAt: -1 });
      if (order === null) {
        resolve({
          status: "ERR",
          message: "The order is not defined",
        });
      }

      resolve({
        status: "OK",
        message: "SUCESSS",
        data: order,
      });
    } catch (e) {
      // console.log('e', e)
      reject(e);
    }
  });
};

const getOrderDetails = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const order = await Order.findById({
        _id: id,
      });
      if (order === null) {
        resolve({
          status: "ERR",
          message: "The order is not defined",
        });
      }

      resolve({
        status: "OK",
        message: "SUCESSS",
        data: order,
      });
    } catch (e) {
      // console.log('e', e)
      reject(e);
    }
  });
};

const cancelOrderDetails = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let order = [];
      const promises = data.map(async (order) => {
        const productData = await Product.findOneAndUpdate(
          {
            _id: order.product,
            selled: { $gte: order.amount },
          },
          {
            $inc: {
              countInStock: +order.amount,
              selled: -order.amount,
            },
          },
          { new: true }
        );
        if (productData) {
          order = await Order.findByIdAndDelete(id);
          if (order === null) {
            resolve({
              status: "ERR",
              message: "The order is not defined",
            });
          }
        } else {
          return {
            status: "OK",
            message: "ERR",
            id: order.product,
          };
        }
      });
      const results = await Promise.all(promises);
      const newData = results && results[0] && results[0].id;

      if (newData) {
        resolve({
          status: "ERR",
          message: `San pham voi id: ${newData} khong ton tai`,
        });
      }
      resolve({
        status: "OK",
        message: "success",
        data: order,
      });
    } catch (e) {
      reject(e);
    }
  });
};

const getAllOrder = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const allOrder = await Order.find().sort({
        createdAt: -1,
        updatedAt: -1,
      });
      resolve({
        status: "OK",
        message: "Success",
        data: allOrder,
      });
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  createOrder,
  getAllOrderDetails,
  getOrderDetails,
  cancelOrderDetails,
  getAllOrder,
};
