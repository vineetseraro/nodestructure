const mongoose = require("mongoose");
const validator = require("validator");

const Modal = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email id is already present"],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid Email");
            }
        }
    },
    phone: {
        type: Number,
        min: 10,

        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true
    }

})

const Modal  = new mongoose.model('Modal', modalSchema);

module.exports = Modal;