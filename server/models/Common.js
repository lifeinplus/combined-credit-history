const mongoose = require("mongoose");

const Common = new mongoose.Schema({
    reportId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "reports",
        required: true,
    },

    chbCreditCardsAmount: { type: Number, min: 0 },

    chbLoansAmount: { type: Number, min: 0 },

    chbPaymentsAmountEur: { type: Number, min: 0 },

    chbPaymentsAmountRub: { type: Number, min: 0 },

    chbPaymentsAmountTotal: { type: Number, min: 0 },

    chbPaymentsAmountUsd: { type: Number, min: 0 },

    flcPaymentsAmountTotal: { type: Number, min: 0 },

    score: {
        type: Number,
        min: 300,
        max: 800,
    },
});

module.exports = mongoose.model("commons", Common);
