
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
  notice there is no ID.
*/

const GadgetSchema = new Schema({
  name: String,
  release_date: Date,
  by_company: String,
  price: Number,
});

module.exports = mongoose.model('Gadget', GadgetSchema);
