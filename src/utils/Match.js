const fields = [
    {
        id: 101,
        extended: false,
        sysName: "Delinquency0Count",
        type: "numeric",
    },
    {
        id: 102,
        extended: false,
        sysName: "Delinquency30Count",
        type: "numeric",
    },
    {
        id: 103,
        extended: false,
        sysName: "Delinquency60Count",
        type: "numeric",
    },
    {
        id: 104,
        extended: false,
        sysName: "Delinquency90Count",
        type: "numeric",
    },
    {
        id: 105,
        extended: false,
        sysName: "DelinquencyRestructuringCount",
        type: "numeric",
    },
    {
        id: 106,
        extended: false,
        sysName: "AccountRatingText",
        type: "text",
    },
    {
        id: 107,
        extended: false,
        sysName: "calculatedBkiPayment",
        sysNameStatus: "calculatedBkiStatus",
        type: "amount",
    },
    {
        id: 108,
        extended: false,
        sysName: "LoanTypeText",
        type: "text",
    },
    {
        id: 109,
        extended: false,
        sysName: "LoanAmount",
        type: "amount",
    },
    {
        id: 110,
        extended: false,
        sysName: "LoanCurrencyCode",
        type: "text",
    },
    {
        id: 111,
        extended: false,
        sysName: "CurrentBalanceAmount",
        type: "amount",
    },
    {
        id: 112,
        extended: false,
        sysName: "DebtAmount",
        type: "amount",
    },
    {
        id: 113,
        extended: false,
        sysName: "unpaidPercent",
        sysNameStatus: "unpaidPercentStatus",
        type: "numeric",
    },
    {
        id: 114,
        extended: false,
        sysName: "DelinquencyAmount",
        type: "amount",
    },
    {
        id: 115,
        extended: false,
        sysName: "AccountCodeText",
        type: "text",
    },
    {
        id: 116,
        extended: false,
        sysName: "LoanCreationDate",
        type: "date",
    },
    {
        id: 117,
        extended: false,
        sysName: "CloseDate",
        type: "date",
    },
    {
        id: 118,
        extended: false,
        sysName: "LastInfoUpdatedDate",
        type: "date",
    },
    {
        id: 119,
        extended: true,
        sysName: "PaymentPeriodCount",
        type: "numeric",
    },
    {
        id: 120,
        extended: true,
        sysName: "monthsNumberSinceDateOfCreation",
        type: "numeric",
    },
    {
        id: 121,
        extended: false,
        sysName: "BusinessCategory",
        type: "text",
    },
    {
        id: 122,
        extended: false,
        sysName: "nbkiLoanNumber",
        type: "numericArray",
    },
    {
        id: 123,
        extended: false,
        sysName: "okbLoanNumber",
        type: "numericArray",
    },
    {
        id: 124,
        extended: true,
        sysName: "monthsNumberCloseDateRemaining",
        type: "numeric",
    },
    {
        id: 125,
        extended: true,
        sysName: "pskTaken",
        type: "numeric",
    },
    {
        id: 126,
        extended: true,
        sysName: "pskCbr",
        type: "numeric",
    },
    {
        id: 127,
        extended: true,
        sysName: "pskNbki",
        type: "numeric",
    },
    {
        id: 128,
        extended: true,
        sysName: "pskOkb",
        type: "numeric",
    },
    {
        id: 129,
        extended: true,
        sysName: "creditorTypeNbki",
        type: "text",
    },
    {
        id: 130,
        extended: true,
        sysName: "creditorTypeOkb",
        type: "text",
    },
    {
        id: 131,
        extended: true,
        sysName: "loanTypeNbki",
        type: "numeric",
    },
    {
        id: 132,
        extended: true,
        sysName: "financeTypeOkb",
        type: "numeric",
    },
    {
        id: 133,
        extended: true,
        sysName: "loanTypeOkb",
        type: "numeric",
    },
    {
        id: 134,
        extended: true,
        sysName: "contractPeriodCount",
        type: "numeric",
    },
    {
        id: 135,
        extended: false,
        sysName: "pskPayment",
        sysNameStatus: "calculatedBkiStatus",
        type: "amount",
    },
];

const paymentAmounts = [
    {
        id: 1,
        sysName: "bkiPaymentsAmountTotal",
        type: "CHB",
    },
    {
        id: 2,
        sysName: "bkiPaymentsAmountRub",
        type: "CHB",
    },
    {
        id: 3,
        sysName: "bkiPaymentsAmountUsd",
        type: "CHB",
    },
    {
        id: 4,
        sysName: "bkiPaymentsAmountEur",
        type: "CHB",
    },
    {
        id: 5,
        sysName: "pskPaymentsAmountTotal",
        type: "FLC",
    },
    {
        id: 6,
        sysName: "bkiLoansAmount",
        type: "obligation",
    },
    {
        id: 7,
        sysName: "bkiCreditCardsAmount",
        type: "obligation",
    },
];

const requestCounts = [
    { id: 1, sysName: "nbkiRequestsCount", type: "all" },
    {
        id: 2,
        sysName: "nbkiCollectionRequestCount",
        type: "all",
    },
    {
        id: 3,
        sysName: "nbkiLastRequestCount",
        type: "all",
    },
    {
        id: 4,
        sysName: "microcreditRequestsCount",
        type: "micro",
    },
    {
        id: 5,
        sysName: "last30DaysMicrocreditRequestsCount",
        type: "micro",
    },
    {
        id: 6,
        sysName: "lastYearMicrocreditRequestsCount",
        type: "micro",
    },
    {
        id: 7,
        sysName: "more1YearMicrocreditRequestsCount",
        type: "micro",
    },
];

export { fields, paymentAmounts, requestCounts };
