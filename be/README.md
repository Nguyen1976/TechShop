- Thunder client giống như postman dùng để kiểm tra các res từ phía client (dùng để kiểm tra api)


## Luồng hoặt động
- Khi client gửi res api/user tạo mới người dùng:
    + Router nhận yêu cầu vào index rồi chạy vào Router tương ứng(UserRouter)
    + Từ router chạy vào controller(UserController) 

    + Controller nhận xử lý logic từ client và tương tác với service và model
    + Controller lấy dữ liệu(req.body) ví dụ controller sẽ gội UserService.createUser(req.body); để sử lý việc tạo mới người dùng
    + service sử lý logic nghiệp vụ 
    + service sẽ tương tác với model để lấy dữ liệu từ mongodb 
    + Ví dụ tạo mới user từ dữ liệu hay res client của controlelr trả về và lưu vào mongodb
    + service trả kết quả cho controller và controller phần hồi về client


## JWT token
- Dùng để xác thực người dùng lưu thông tin xác thực như id hoặc email,  quyền hạn
- Nó chứa thời gian hết hạn, giúp máy chủ kiểm tra xem token hợp lệ không, nếu hết token người dùng sẽ phải đăng nhập lại

## Khác nhau giữa access-token và refresh_token
- at có thời gian ngắn và cứ sau 1h thì sẽ rt 1 lần điều này giúp cho quản lý bảo mật tốt vì khi để lộ token thì hacker chỉ có thể dùng nó sau 1h và sau đó token sẽ bị vô hiệu hóa và rt có thời gian dài để có thể duy trì việc cấp token mới và khi rt hết hạn người dùng phải đăng nhập và xác thực lại thông tin