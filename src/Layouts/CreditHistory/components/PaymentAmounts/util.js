const respectivePaymentAmounts = [
    {
        context: "primary",
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

export { respectivePaymentAmounts };
