const mongoose = require("mongoose");

const RequestCount = new mongoose.Schema({
    reportId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "reports",
        required: true,
    },

    total: { type: Number, min: 0 },

    last24Months: { type: Number, min: 0 },

    last30Days: { type: Number, min: 0 },

    microcreditTotal: { type: Number, min: 0 },

    microcreditLast30Days: { type: Number, min: 0 },

    microcreditLastYear: { type: Number, min: 0 },

    microcreditMore1Year: { type: Number, min: 0 },
});

module.exports = mongoose.model("requestcounts", RequestCount);
