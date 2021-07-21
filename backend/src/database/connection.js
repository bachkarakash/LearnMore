const mongoose = require('mongoose');
const mongoDB = process.env.MONGODB;

mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    pass: process.env.PASSWORD
}).then(()=> {
    console.log('connected to mongoDB');
}).catch((err) => {
    console.log(err);
});