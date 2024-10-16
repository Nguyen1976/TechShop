## Cách hoạt động của redux trong việc lưu thông tin người dùng sau đăng nhập
- khi người dùng đăng nhập thành công đồng thời sẽ gửi 1 dispatch
    dispatch(updateUser({...res.data, access_token: token}));
    nó gọi đến updateUser trong userSlice
- UserUpdate nhận dữ liệu từ action sau đó set lại sate và export ra ngoài
- store gọi userReducer do userSlice export và lưu vào store
- Để xử dụng giữ liệu đã lưu trong store thì sử dụng hook useSelector
    const user = useSelector((state) => state.user)
    user sẽ chứa thông tin người dùng mà đã được lưu vào store