const fields = [
    {
        extended: false,
        sysName: "Delinquency0Count",
        type: "numeric",
    },
    {
        extended: false,
        sysName: "Delinquency30Count",
        type: "numeric",
    },
    {
        extended: false,
        sysName: "Delinquency60Count",
        type: "numeric",
    },
    {
        extended: false,
        sysName: "Delinquency90Count",
        type: "numeric",
    },
    {
        extended: false,
        sysName: "DelinquencyRestructuringCount",
        type: "numeric",
    },
    {
        extended: false,
        sysName: "AccountRatingText",
        type: "text",
    },
    {
        extended: false,
        sysName: "calculatedBkiPayment",
        sysNameStatus: "calculatedBkiStatus",
        type: "amount",
    },
    {
        extended: false,
        sysName: "LoanTypeText",
        type: "text",
    },
    {
        extended: false,
        sysName: "LoanAmount",
        type: "amount",
    },
    {
        extended: false,
        sysName: "LoanCurrencyCode",
        type: "text",
    },
    {
        extended: false,
        sysName: "CurrentBalanceAmount",
        type: "amount",
    },
    {
        extended: false,
        sysName: "DebtAmount",
        type: "amount",
    },
    {
        extended: false,
        sysName: "unpaidPercent",
        sysNameStatus: "unpaidPercentStatus",
        type: "numeric",
    },
    {
        extended: false,
        sysName: "DelinquencyAmount",
        type: "amount",
    },
    {
        extended: false,
        sysName: "AccountCodeText",
        type: "text",
    },
    {
        extended: false,
        sysName: "LoanCreationDate",
        type: "date",
    },
    {
        extended: false,
        sysName: "CloseDate",
        type: "date",
    },
    {
        extended: false,
        sysName: "LastInfoUpdatedDate",
        type: "date",
    },
    {
        extended: true,
        sysName: "PaymentPeriodCount",
        type: "numeric",
    },
    {
        extended: true,
        sysName: "monthsNumberSinceDateOfCreation",
        type: "numeric",
    },
    {
        extended: false,
        sysName: "BusinessCategory",
        type: "text",
    },
    {
        extended: false,
        sysName: "nbkiLoanNumber",
        type: "numericArray",
    },
    {
        extended: false,
        sysName: "okbLoanNumber",
        type: "numericArray",
    },
    {
        extended: true,
        sysName: "monthsNumberCloseDateRemaining",
        type: "numeric",
    },
    {
        extended: true,
        sysName: "pskTaken",
        type: "numeric",
    },
    {
        extended: true,
        sysName: "pskCbr",
        type: "numeric",
    },
    {
        extended: true,
        sysName: "pskNbki",
        type: "numeric",
    },
    {
        extended: true,
        sysName: "pskOkb",
        type: "numeric",
    },
    {
        extended: true,
        sysName: "creditorTypeNbki",
        type: "text",
    },
    {
        extended: true,
        sysName: "creditorTypeOkb",
        type: "text",
    },
    {
        extended: true,
        sysName: "loanTypeNbki",
        type: "numeric",
    },
    {
        extended: true,
        sysName: "financeTypeOkb",
        type: "numeric",
    },
    {
        extended: true,
        sysName: "loanTypeOkb",
        type: "numeric",
    },
    {
        extended: true,
        sysName: "contractPeriodCount",
        type: "numeric",
    },
    {
        extended: false,
        sysName: "pskPayment",
        sysNameStatus: "calculatedBkiStatus",
        type: "amount",
    },
];

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

export { fields, paymentAmounts, requestCounts };
