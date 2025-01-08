const mongoose = require('mongoose')
const db_url = `${process.env.DB_HOST}://${process.env.DB_USERNAME}:${process.env.DB_PASS}@${process.env.DB_ENDPOINT}`

let connectMongoDb = () => {
    return new Promise((resolve,reject) => {
        mongoose.connect(db_url);

        mongoose.connection.once('open',() => {
            console.log('Connected to MongoDB');
            const con_status = mongoose.connection.readyState;
            resolve(con_status);
        })
        .on('error', (err) => {
            console.log('Error connecting to MongoDB:', err);
            reject(err);
    });
    });
}

module.exports.connectMongoDb = connectMongoDb;