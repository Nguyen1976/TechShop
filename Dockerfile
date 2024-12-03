# Sử dụng Node.js image chính thức làm base image
FROM node:18

# Tạo thư mục ứng dụng trong container
WORKDIR /app

# Sao chép package.json và package-lock.json (nếu có) vào container
COPY package*.json ./

# Cài đặt các dependencies từ package.json
RUN npm install

# Sao chép mã nguồn của bạn vào container
COPY . .

# Mở cổng mà ứng dụng sẽ chạy trên container
EXPOSE 8000
# Lệnh để chạy ứng dụng
CMD ["npm", "start"]
