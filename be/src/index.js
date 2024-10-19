const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');//Kết nối frontend and backend cho phép front gửi yêu cầu đến back từ 1 nguồn gốc khác mà không bị chặn bởi trình duyệt
const cookieParser = require('cookie-parser');

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

routes(app);


mongoose.connect(process.env.MONGO_DB)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(err => {
        console.log(err.message);
        console.log('Error connecting to MongoDB');
    })



app.listen(port, () => {
    console.log(`listening on port ${port}`);
});