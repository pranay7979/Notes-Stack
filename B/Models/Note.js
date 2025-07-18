const mongoose = require('mongoose');
const { Schema } = mongoose;
const NoteSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  tag: {
    type: String,
    default: "General"
  },
  time: {
  type: Date,
  default: Date.now
}
});

module.exports = mongoose.model('note', NoteSchema);
