const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const routes = require('./routes');

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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