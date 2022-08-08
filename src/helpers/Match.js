const paymentChbAmounts = [
    {
        id: 1,
        name: "Payments amount CHB: RUB",
        sysName: "paymentAmountChbTotal",
    },
    {
        id: 2,
        name: "RUB",
        sysName: "paymentAmountChbRub",
    },
    {
        id: 3,
        name: "USD",
        sysName: "paymentAmountChbUsd",
    },
    {
        id: 4,
        name: "EUR",
        sysName: "paymentAmountChbEur",
    },
];

const paymentFlcAmounts = [
    {
        id: 1,
        name: "Payments amount 4892-U: RUB",
        sysName: "paymentAmountFlcTotal",
    },
];

const paymentObligationAmounts = [
    {
        id: 1,
        name: "Loans amount: RUB",
        sysName: "loansAmount",
    },
    {
        id: 2,
        name: "Cards amount: RUB",
        sysName: "cardsAmount",
    },
];

const requestCounts = [
    { id: 1, sysName: "nbkiRequestsCount", name: "Total" },
    { id: 2, sysName: "nbkiCollectionRequestCount", name: "Last 24 months" },
    { id: 3, sysName: "nbkiLastRequestCount", name: "Last 30 days" },
    { id: 4, sysName: "score", name: "Score" },
];

const requestMicrocreditCounts = [
    { id: 1, sysName: "microcreditRequestsCount", name: "Total" },
    {
        id: 2,
        sysName: "last30DaysMicrocreditRequestsCount",
        name: "Last 30 days",
    },
    { id: 3, sysName: "lastYearMicrocreditRequestsCount", name: "Last year" },
    {
        id: 4,
        sysName: "more1YearMicrocreditRequestsCount",
        name: "More than 1 year",
    },
];

export {
    paymentChbAmounts,
    paymentFlcAmounts,
    paymentObligationAmounts,
    requestCounts,
    requestMicrocreditCounts,
};
