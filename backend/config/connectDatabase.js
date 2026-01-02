// connecting database
// import mongoose
// connect to database like Config.env file

const mongoose = require('mongoose');
const connectDatabase = () => {
    mongoose.connect(process.env.DB_URL).then((e) =>{
        console.log('Database connected successfully: '+e.connection.host);
    })
}
module.exports = connectDatabase;