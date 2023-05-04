const mongoose = require("mongoose");

const ReportSchema = new mongoose.Schema({
    appNumber: {
        type: String,
        required: true,
    },

    appCreationDate: {
        type: String,
        required: true,
    },

    clientName: {
        type: String,
        required: true,
    },

    documentNumber: {
        type: String,
        required: true,
    },

    documentSeries: {
        type: String,
        required: true,
    },

    reportCreationDate: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("reports", ReportSchema);
