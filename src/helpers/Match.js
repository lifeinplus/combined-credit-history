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
    { id: 1, name: "Total", sysName: "nbkiRequestsCount", type: "all" },
    {
        id: 2,
        name: "Last 24 months",
        sysName: "nbkiCollectionRequestCount",
        type: "all",
    },
    {
        id: 3,
        name: "Last 30 days",
        sysName: "nbkiLastRequestCount",
        type: "all",
    },
    {
        id: 4,
        sysName: "microcreditRequestsCount",
        name: "Total",
        type: "micro",
    },
    {
        id: 5,
        sysName: "last30DaysMicrocreditRequestsCount",
        name: "Last 30 days",
        type: "micro",
    },
    {
        id: 6,
        sysName: "lastYearMicrocreditRequestsCount",
        name: "Last year",
        type: "micro",
    },
    {
        id: 7,
        sysName: "more1YearMicrocreditRequestsCount",
        name: "More than 1 year",
        type: "micro",
    },
];

export { paymentAmounts, requestCounts };
