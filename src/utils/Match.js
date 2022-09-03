const paymentAmounts = [
    {
        context: "warning",
        sysName: "bkiPaymentsAmountTotal",
        type: "payment",
    },
    {
        sysName: "bkiPaymentsAmountRub",
        type: "payment",
    },
    {
        sysName: "bkiPaymentsAmountUsd",
        type: "payment",
    },
    {
        sysName: "bkiPaymentsAmountEur",
        type: "payment",
    },
    {
        context: "info",
        extended: true,
        sysName: "pskPaymentsAmountTotal",
        type: "payment",
    },
    {
        sysName: "bkiLoansAmount",
        type: "obligation",
    },
    {
        sysName: "bkiCreditCardsAmount",
        type: "obligation",
    },
];

const requestCounts = [
    {
        sysName: "nbkiRequestsCount",
        type: "all",
    },
    {
        sysName: "nbkiCollectionRequestCount",
        type: "all",
    },
    {
        sysName: "nbkiLastRequestCount",
        type: "all",
    },
    {
        sysName: "microcreditRequestsCount",
        type: "micro",
    },
    {
        sysName: "last30DaysMicrocreditRequestsCount",
        type: "micro",
    },
    {
        sysName: "lastYearMicrocreditRequestsCount",
        type: "micro",
    },
    {
        sysName: "more1YearMicrocreditRequestsCount",
        type: "micro",
    },
];

export { paymentAmounts, requestCounts };
