const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  about: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  avatar: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        const regex = /https?:\/\/(www\.)?[a-zA-Z0-9-.]{2,63}\.[a-z]{2,6}\/?([-a-zA-Z0-9._~:/?%#[\]@!$&'()*+,;=]*)/;
        return regex.test(v);
      },
      message: 'Please enter a url', // when the validator returns false, this message will be displayed
    },
  },
});

// create the model and export it
module.exports = mongoose.model('user', userSchema);
