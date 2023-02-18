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
        badgeMore: 0,
        badgeType: "warning",
        dataType: "numeric",
        sysName: "Delinquency0Count",
    },
    {
        badgeMore: 0,
        badgeType: "danger",
        dataType: "numeric",
        sysName: "Delinquency30Count",
    },
    {
        badgeMore: 0,
        badgeType: "danger",
        dataType: "numeric",
        sysName: "Delinquency60Count",
    },
    {
        badgeMore: 0,
        badgeType: "danger",
        dataType: "numeric",
        sysName: "Delinquency90Count",
    },
    {
        badgeMore: 0,
        badgeType: "dark",
        dataType: "numeric",
        sysName: "DelinquencyRestructuringCount",
    },
    {
        dataType: "text",
        sysName: "AccountRatingText",
    },
    {
        dataType: "amount",
        sysName: "calculatedBkiPayment",
        sysNameStatus: "calculatedBkiStatus",
    },
    {
        badgeEqual: "Микрокредит",
        badgeType: "danger",
        dataType: "text",
        sysName: "LoanTypeText",
    },
    {
        dataType: "amount",
        sysName: "LoanAmount",
    },
    {
        dataType: "text",
        sysName: "LoanCurrencyCode",
    },
    {
        dataType: "amount",
        sysName: "CurrentBalanceAmount",
    },
    {
        dataType: "amount",
        sysName: "DebtAmount",
    },
    {
        dataType: "numeric",
        sysName: "unpaidPercent",
        sysNameStatus: "unpaidPercentStatus",
    },
    {
        badgeMore: 0,
        badgeType: "danger",
        dataType: "amount",
        sysName: "DelinquencyAmount",
    },
    {
        dataType: "text",
        sysName: "AccountCodeText",
    },
    {
        dataType: "date",
        sysName: "LoanCreationDateText",
    },
    {
        dataType: "date",
        sysName: "CloseDateText",
    },
    {
        dataType: "date",
        sysName: "LastInfoUpdatedDateText",
    },
    {
        dataType: "numeric",
        extended: true,
        sysName: "PaymentPeriodCount",
    },
    {
        dataType: "numeric",
        extended: true,
        sysName: "monthsNumberSinceDateOfCreation",
    },
    {
        dataType: "text",
        sysName: "BusinessCategory",
    },
    {
        dataType: "numericArray",
        sysName: "nbkiLoanNumber",
    },
    {
        dataType: "numericArray",
        sysName: "okbLoanNumber",
    },
    {
        dataType: "numeric",
        extended: true,
        sysName: "monthsNumberCloseDateRemaining",
    },
    {
        dataType: "numeric",
        extended: true,
        sysName: "pskTaken",
    },
    {
        dataType: "numeric",
        extended: true,
        sysName: "pskCbr",
    },
    {
        dataType: "numeric",
        extended: true,
        sysName: "pskNbki",
    },
    {
        dataType: "numeric",
        extended: true,
        sysName: "pskOkb",
    },
    {
        dataType: "text",
        extended: true,
        sysName: "creditorTypeNbki",
    },
    {
        dataType: "text",
        extended: true,
        sysName: "creditorTypeOkb",
    },
    {
        dataType: "numeric",
        extended: true,
        sysName: "loanTypeNbki",
    },
    {
        dataType: "numeric",
        extended: true,
        sysName: "financeTypeOkb",
    },
    {
        dataType: "numeric",
        extended: true,
        sysName: "loanTypeOkb",
    },
    {
        dataType: "numeric",
        extended: true,
        sysName: "contractPeriodCount",
    },
    {
        dataType: "amount",
        sysName: "pskPayment",
        sysNameStatus: "calculatedBkiStatus",
    },
];

export { TimePeriod, respectiveColumns };
