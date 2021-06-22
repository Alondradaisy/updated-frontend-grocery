const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  grocery: {
    type: String,
  },
  purchased: {
    type: Boolean,
  },
  dateAdded: {
    type: Date,
    default: () => Date.now(),
  },
});

mongoose.model("User", UserSchema);
