const customFields = [
    {
        context: "primary",
        sysName: "chbPaymentsAmountTotal",
        type: "payment",
    },
    {
        sysName: "chbPaymentsAmountRub",
        type: "payment",
    },
    {
        sysName: "chbPaymentsAmountUsd",
        type: "payment",
    },
    {
        sysName: "chbPaymentsAmountEur",
        type: "payment",
    },
    {
        context: "info",
        extended: true,
        sysName: "flcPaymentsAmountTotal",
        type: "payment",
    },
    {
        sysName: "chbLoansAmount",
        type: "obligation",
    },
    {
        sysName: "chbCreditCardsAmount",
        type: "obligation",
    },
];

export { customFields };
