class TimePeriod {
    #loans;
    #lastDate;

    constructor(loans, lastDate) {
        this.#loans = loans;
        this.#lastDate = new Date(lastDate);
    }

    get result() {
        const dates = this.#getMonthDates();

        return dates.map((item) => {
            return new Intl.DateTimeFormat("ru", {
                month: "numeric",
                year: "numeric",
            }).format(item);
        });
    }

    #getMonthDates() {
        const result = [this.#lastDate];
        const monthsNumber = this.#getMonthsNumber();

        for (let i = 1; i < monthsNumber; i++) {
            let previous = result[i - 1];

            let date = new Date(previous.getTime());
            date.setMonth(date.getMonth() - 1);

            result.push(date);
        }

        return result;
    }

    #getMonthsNumber() {
        const startDate = this.#getStartDate();
        const startFullYear = startDate.getFullYear();
        const startMonth = startDate.getMonth();

        const endDate = this.#lastDate;
        const endFullYear = endDate.getFullYear();
        const endMonth = endDate.getMonth();

        return (endFullYear - startFullYear) * 12 + (endMonth + 1) - startMonth;
    }

    #getStartDate() {
        let result = this.#lastDate;

        this.#loans.forEach((loan) => {
            const MonthlyHistoryList = loan.MonthlyHistoryList || [];

            MonthlyHistoryList.forEach((item) => {
                const HistoryDate = new Date(item.HistoryDate);

                if (result > HistoryDate) {
                    result = HistoryDate;
                }
            });
        });

        return result;
    }
}

const respectiveColumns = [
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
        sysName: "LoanCreationDateText",
        type: "date",
    },
    {
        sysName: "CloseDateText",
        type: "date",
    },
    {
        sysName: "LastInfoUpdatedDateText",
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

export { TimePeriod, respectiveColumns };
