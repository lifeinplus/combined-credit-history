const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");

const Common = require("./models/Common");
const Delinquency = require("./models/Delinquency");
const Flc = require("./models/Flc");
const Loan = require("./models/Loan");
const PaymentHistory = require("./models/PaymentHistory");
const Person = require("./models/Person");
const Report = require("./models/Report");
const RequestCount = require("./models/RequestCount");

const app = express();
app.use(cors());
// app.use(express.json());
app.use(express.json({ limit: 52428800 }));

mongoose
    .connect("mongodb://localhost/cchdb")
    .then(() => console.log("Connected to cchdb database"))
    .catch((e) => console.error(e));

app.get("/commonsGet", async (req, res) => {
    const { reportId } = req.query;

    try {
        const result = await Common.findOne({ reportId });
        res.send(result);
    } catch (error) {
        res.send(error);
    }
});

app.get("/delinquenciesGet", async (req, res) => {
    const { loanIds } = req.query;

    try {
        const result = await Delinquency.find({
            loanId: { $in: loanIds },
        });
        res.send(result);
    } catch (error) {
        res.send(error);
    }
});

app.get("/flcsGet", async (req, res) => {
    const { loanIds } = req.query;

    try {
        const result = await Flc.find({ loanId: { $in: loanIds } });
        res.send(result);
    } catch (error) {
        res.send(error);
    }
});

app.get("/loansGet", async (req, res) => {
    const { reportId } = req.query;

    try {
        const result = await Loan.find({ reportId });
        res.send(result);
    } catch (error) {
        res.send(error);
    }
});

app.get("/paymentHistoriesGet", async (req, res) => {
    const { loanIds } = req.query;

    try {
        const result = await PaymentHistory.find({ loanId: { $in: loanIds } });
        res.send(result);
    } catch (error) {
        res.send(error);
    }
});

app.get("/personsGet", async (req, res) => {
    const { reportId } = req.query;

    try {
        const result = await Person.find({ reportId });
        res.send(result);
    } catch (error) {
        res.send(error);
    }
});

app.get("/reportGet", async (req, res) => {
    const { reportId } = req.query;

    try {
        const result = await Report.findOne({ _id: reportId });
        res.send(result);
    } catch (error) {
        res.send(error);
    }
});

app.get("/reportsGet", async (req, res) => {
    try {
        const result = await Report.find({}).sort("appNumber");
        res.send(result);
    } catch (error) {
        res.send(error);
    }
});

app.post("/reportsInsert", async (req, res) => {
    const data = req.body;
    const { reports, persons, requestcounts, commons } = data;

    reports.forEach(async (item) => {
        const id = item.reportId;
        const report = await Report(item);
        const newId = report._id;

        const personList = reportData(persons, id, newId);
        const [requestCount] = reportData(requestcounts, id, newId);
        const [common] = reportData(commons, id, newId);

        try {
            await report.save();
            await Person.insertMany(personList);
            await RequestCount.create(requestCount);
            await Common.create(common);
            await insertLoans(data, id, newId);
        } catch (error) {
            console.error(error.message);
        }
    });

    res.send("reports inserted");
});

app.get("/requestCountsGet", async (req, res) => {
    const { reportId } = req.query;

    try {
        const result = await RequestCount.findOne({ reportId });
        res.send(result);
    } catch (error) {
        res.send(error);
    }
});

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});

async function insertLoans(data, id, newId) {
    const { loans, delinquencies, flcs, paymenthistories } = data;
    const loanList = reportData(loans, id, newId);

    loanList.forEach(async (item) => {
        const loanId = item.loanId;
        const loan = await Loan(item);
        const newLoanId = loan._id;

        const [delinquency] = loanData(delinquencies, loanId, newLoanId);
        const [flc] = loanData(flcs, loanId, newLoanId);
        const paymentHistories = loanData(paymenthistories, loanId, newLoanId);

        try {
            await loan.save();
            await Delinquency.create(delinquency);
            await Flc.create(flc);
            await PaymentHistory.insertMany(paymentHistories);
        } catch (error) {
            console.error(error.message);
        }
    });
}

function reportData(data, id, newId) {
    const result = data.filter((item) => item.reportId === id);

    result.forEach((item) => {
        item.reportId = newId;
    });

    return result;
}

function loanData(data, id, newId) {
    const result = data.filter((item) => item.loanId === id);

    result.forEach((item) => {
        item.loanId = newId;
    });

    return result;
}
