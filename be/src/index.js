const express = require('express');
const dotenv = require('dotenv');
const { default: mongoose } = require('mongoose');
const routes = require('./routes');
const bodyParser = require('body-parser');

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;


routes(app);

app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_DB)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(err => {
        console.log('Error connecting to MongoDB');
    })



app.listen(port, () => {
    console.log(`listening on port ${port}`);
});