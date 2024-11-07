const mongoose = require('mongoose')
mongoose.connect ("mongodb+srv://gsrilathagsrilatha234:20052005latha@in-latha.wvdua.mongodb.net/max-store?retryWrites=true&w=majority&appName=In-Latha")
const connection = mongoose.connection;
connection.on('connected',() =>(console.log("DB Connected")))
connection.on('error',() =>(console.log("DB Error")))
module.experts=mongoose