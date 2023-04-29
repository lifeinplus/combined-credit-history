const mongoose = require("mongoose");

const Person = new mongoose.Schema({
    reportId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "reports",
        required: true,
    },

    birthDate: String,

    clientName: String,

    dataSource: {
        type: String,
        required: true,
    },

    documentIssueDate: String,

    documentNumber: String,

    documentSeries: String,
});

module.exports = mongoose.model("persons", Person);
