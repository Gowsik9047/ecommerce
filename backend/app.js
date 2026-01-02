const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path');
const connectDatabase = require('./config/connectDatabase');
const cors = require('cors');

dotenv.config({ path: path.join(__dirname, 'config', 'config.env') });

connectDatabase();

const products = require('./routes/product');
const orders = require('./routes/order');

// its used to parse json data from request body
// Normally Api Post request data are sent in json format
// so use follow first line code
app.use(express.json());

// this is beckend send security policy to browser
// npm i cors
app.use(cors());

// using routes
app.use('/api/v1/', products);
app.use('/api/v1/', orders);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
})
// app.listen(8000, () => {
//     console.log(`Server is running on PORT: 8000 in development mode`);
// })