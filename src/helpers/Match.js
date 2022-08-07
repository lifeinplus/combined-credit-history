const paymentChbNames = [
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

const paymentFlcNames = [
    {
        id: 1,
        name: "Payments amount 4892-U: RUB",
        sysName: "paymentAmountFlcTotal",
    },
];

const requestNames = [
    { id: 1, sysName: "nbkiRequestsCount", name: "Total" },
    { id: 2, sysName: "nbkiCollectionRequestCount", name: "Last 24 months" },
    { id: 3, sysName: "nbkiLastRequestCount", name: "Last 30 days" },
    { id: 4, sysName: "score", name: "Score" },
];

const requestMicroNames = [
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

export { paymentChbNames, paymentFlcNames, requestNames, requestMicroNames };
