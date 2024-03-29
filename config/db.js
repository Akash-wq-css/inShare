require('dotenv').config();
const mongoose = require('mongoose');
function connectDB() {
	//database connection
	 mongoose.connect(process.env.MONGO_CONNECTION_URL, { useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology: true, useFindAndModify : true });
    const connection = mongoose.connection;
     connection.once('open',() =>{
	     console.log('Database Connected.');
     }).catch (err =>{
	     console.log('Connected Failed.');
     })
}
module.exports = connectDB;