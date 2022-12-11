const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    age: {
      type: Number, 
      min: 0,
    },
    isActive: {
      type: Boolean,
      min: 0,
    },
  },
//   {
//     timestamps: true,
//   }
);

const product = mongoose.model("product", schema);

module.exports = product;
