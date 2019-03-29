
const mongoose = require('mongoose');

const initDB = () => {

  mongoose.connect(
    'mongodb+srv://deni2346:1488@modernapi-9hj4j.mongodb.net/test?retryWrites=true',
    { useNewUrlParser: true }
  );

  mongoose.connection.once('open', () => {
    console.log('connected to database');
  });

}

module.exports = initDB;
