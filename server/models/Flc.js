const mongoose = require("mongoose");

const Flc = new mongoose.Schema({
    loanId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "loans",
        required: true,
    },

    flcPayment: { type: Number, min: 0 },

    flcTaken: Number,

    flcNchb: Number,

    flcUcb: Number,
});

module.exports = mongoose.model("flcs", Flc);
