const fields = [
    {
        sysName: "Delinquency0Count",
        type: "numeric",
    },
    {
        sysName: "Delinquency30Count",
        type: "numeric",
    },
    {
        sysName: "Delinquency60Count",
        type: "numeric",
    },
    {
        sysName: "Delinquency90Count",
        type: "numeric",
    },
    {
        sysName: "DelinquencyRestructuringCount",
        type: "numeric",
    },
    {
        sysName: "AccountRatingText",
        type: "text",
    },
    {
        sysName: "calculatedBkiPayment",
        sysNameStatus: "calculatedBkiStatus",
        type: "amount",
    },
    {
        sysName: "LoanTypeText",
        type: "text",
    },
    {
        sysName: "LoanAmount",
        type: "amount",
    },
    {
        sysName: "LoanCurrencyCode",
        type: "text",
    },
    {
        sysName: "CurrentBalanceAmount",
        type: "amount",
    },
    {
        sysName: "DebtAmount",
        type: "amount",
    },
    {
        sysName: "unpaidPercent",
        sysNameStatus: "unpaidPercentStatus",
        type: "numeric",
    },
    {
        sysName: "DelinquencyAmount",
        type: "amount",
    },
    {
        sysName: "AccountCodeText",
        type: "text",
    },
    {
        sysName: "LoanCreationDate",
        type: "date",
    },
    {
        sysName: "CloseDate",
        type: "date",
    },
    {
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
        sysName: "BusinessCategory",
        type: "text",
    },
    {
        sysName: "nbkiLoanNumber",
        type: "numericArray",
    },
    {
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
