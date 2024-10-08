- Thunder client giống như postman dùng để kiểm tra các res từ phía client (dùng để kiểm tra api)


## Luồng chạy
- Khi client gửi res api/user tạo mới người dùng:
    + Router nhận yêu cầu vào index rồi chạy vào Router tương ứng(UserRouter)
    + Từ router chạy vào controller(UserController) 

    + Controller nhận xử lý logic từ client và tương tác với service và model
    + Controller lấy dữ liệu(req.body) ví dụ controller sẽ gội UserService.createUser(req.body); để sử lý việc tạo mới người dùng
    + service sử lý logic nghiệp vụ 
    + service sẽ tương tác với model để lấy dữ liệu từ mongodb 
    + Ví dụ tạo mới user từ dữ liệu hay res client của controlelr trả về và lưu vào mongodb
    + service trả kết quả cho controller và controller phần hồi về client

