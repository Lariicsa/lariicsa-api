const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const samSchema = new Schema({
  name: String,
  lastname: String,
  skills: Array,
  image: String,
  extract: String,
  social: Array,
  jobs: Array
},
  {
    timestamps: true,
    versionKey: false
  });



const Sam = mongoose.model('Sam', samSchema);
module.exports = Sam;