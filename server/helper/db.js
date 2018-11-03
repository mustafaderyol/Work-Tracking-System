const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect('mongodb://localhost:27017/WorkTrackingSystem', { useNewUrlParser : true});
    mongoose.connection.on('open', () => {
        console.log("success");
    });
    mongoose.connection.on('error', (err) => {
        console.log("fail"+err);
    });
    mongoose.Promise = global.Promise;
};