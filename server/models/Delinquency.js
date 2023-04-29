const mongoose = require("mongoose");

const Delinquency = new mongoose.Schema({
    loanId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "loans",
        required: true,
    },

    delinquency0Plus: { type: Number, min: 0 },

    delinquency30Plus: { type: Number, min: 0 },

    delinquency60Plus: { type: Number, min: 0 },

    delinquency90Plus: { type: Number, min: 0 },

    delinquencyRefinancing: { type: Number, min: 0 },
});

module.exports = mongoose.model("delinquencies", Delinquency);
