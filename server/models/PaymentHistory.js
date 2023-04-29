const mongoose = require("mongoose");

const PaymentHistory = new mongoose.Schema({
    loanId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "loans",
        required: true,
    },

    date: String,

    status: String,
});

module.exports = mongoose.model("paymenthistories", PaymentHistory);
