const paymentAmounts = [
    {
        id: 1,
        name: "Payments amount CHB: RUB",
        sysName: "bkiPaymentsAmountTotal",
        type: "CHB",
    },
    {
        id: 2,
        name: "RUB",
        sysName: "bkiPaymentsAmountRub",
        type: "CHB",
    },
    {
        id: 3,
        name: "USD",
        sysName: "bkiPaymentsAmountUsd",
        type: "CHB",
    },
    {
        id: 4,
        name: "EUR",
        sysName: "bkiPaymentsAmountEur",
        type: "CHB",
    },
    {
        id: 5,
        name: "Payments amount 4892-U: RUB",
        sysName: "pskPaymentsAmountTotal",
        type: "FLC",
    },
    {
        id: 6,
        name: "Loans amount: RUB",
        sysName: "bkiLoansAmount",
        type: "obligation",
    },
    {
        id: 7,
        name: "Cards amount: RUB",
        sysName: "bkiCreditCardsAmount",
        type: "obligation",
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

export { paymentAmounts, requestCounts, requestMicrocreditCounts };
