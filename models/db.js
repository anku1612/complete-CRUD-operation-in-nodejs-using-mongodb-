const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/EmployeeDB',{useNewUrlParser:true},(err)=>{
if(!err){console.log('MongoDb Connection Succeeded.')}
else{ console.log('Error in Db Connection : ' + err)}});

require('./employee.model');