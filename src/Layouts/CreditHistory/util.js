import { getDateTimeFormat } from "../../util";

class TimePeriod {
    #loans;
    #lastDate;

    constructor(loans, lastDate) {
        this.#loans = loans;
        this.#lastDate = lastDate;
    }

    get result() {
        const milliseconds = Date.parse(this.#lastDate);
        const lastDate = new Date(milliseconds);
        const result = [lastDate];

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
        const lastDate = this.#lastDate;

        const [startMonth, startYear] = this.#defineMonthYear(startDate);
        const [lastMonth, lastYear] = this.#defineMonthYear(lastDate);

        return (lastYear - startYear) * 12 + (lastMonth + 1) - startMonth;
    }

    #defineMonthYear(isoDate) {
        const statusFormat = getDateTimeFormat("ru", "tableStatus");
        const milliseconds = Date.parse(isoDate);

        return statusFormat
            .format(milliseconds)
            .split(".")
            .map((item) => Number(item));
    }

    #getStartDate() {
        return this.#loans.reduce((result, loan) => {
            const MonthlyHistoryList = loan.MonthlyHistoryList || [];

            MonthlyHistoryList.forEach(({ HistoryDate }) => {
                result = result > HistoryDate ? HistoryDate : result;
            });

            return result;
        }, this.#lastDate);
    }
}

const customFields = [
    {
        alignment: "text-end",
        badgeMore: 0,
        badgeType: "A",
        dataType: "numeric",
        sysName: "Delinquency0Count",
    },
    {
        alignment: "text-end",
        badgeMore: 0,
        badgeType: "5",
        dataType: "numeric",
        sysName: "Delinquency30Count",
    },
    {
        alignment: "text-end",
        badgeMore: 0,
        badgeType: "5",
        dataType: "numeric",
        sysName: "Delinquency60Count",
    },
    {
        alignment: "text-end",
        badgeMore: 0,
        badgeType: "5",
        dataType: "numeric",
        sysName: "Delinquency90Count",
    },
    {
        alignment: "text-end",
        badgeMore: 0,
        badgeType: "8",
        dataType: "numeric",
        sysName: "DelinquencyRestructuringCount",
        tooltip: true,
    },
    {
        alignment: "text-start",
        dataType: "text",
        sysName: "AccountRatingText",
    },
    {
        alignment: "text-end",
        dataType: "amount",
        sysName: "calculatedBkiPayment",
        sysNameStatus: "calculatedBkiStatus",
        tooltip: true,
    },
    {
        alignment: "text-end",
        dataType: "amount",
        sysName: "pskPayment",
        sysNameStatus: "calculatedBkiStatus",
        tooltip: true,
    },
    {
        alignment: "text-start",
        badgeEqual: "Микрокредит",
        badgeType: "5",
        dataType: "text",
        sysName: "LoanTypeText",
    },
    {
        alignment: "text-end",
        dataType: "amount",
        sysName: "LoanAmount",
    },
    {
        alignment: "text-start",
        dataType: "text",
        sysName: "LoanCurrencyCode",
    },
    {
        alignment: "text-end",
        dataType: "amount",
        sysName: "CurrentBalanceAmount",
    },
    {
        alignment: "text-end",
        dataType: "amount",
        sysName: "DebtAmount",
    },
    {
        alignment: "text-end",
        dataType: "numeric",
        sysName: "unpaidPercent",
        sysNameStatus: "unpaidPercentStatus",
    },
    {
        alignment: "text-end",
        badgeMore: 0,
        badgeType: "5",
        dataType: "amount",
        sysName: "DelinquencyAmount",
    },
    {
        alignment: "text-start",
        dataType: "text",
        sysName: "AccountCodeText",
    },
    {
        alignment: "text-center",
        dataType: "date",
        sysName: "LoanCreationDate",
    },
    {
        alignment: "text-center",
        dataType: "date",
        sysName: "CloseDate",
    },
    {
        alignment: "text-center",
        dataType: "date",
        sysName: "LastInfoUpdatedDate",
        tooltip: true,
    },
    {
        alignment: "text-start",
        dataType: "text",
        sysName: "BusinessCategory",
    },
    {
        alignment: "text-end",
        dataType: "numericArray",
        sysName: "nbkiLoanNumber",
        tooltip: true,
    },
    {
        alignment: "text-end",
        dataType: "numericArray",
        sysName: "okbLoanNumber",
        tooltip: true,
    },
    {
        alignment: "text-end",
        dataType: "numeric",
        extended: true,
        sysName: "PaymentPeriodCount",
        tooltip: true,
    },
    {
        alignment: "text-end",
        dataType: "numeric",
        extended: true,
        sysName: "monthsNumberSinceDateOfCreation",
        tooltip: true,
    },
    {
        alignment: "text-end",
        dataType: "numeric",
        extended: true,
        sysName: "monthsNumberCloseDateRemaining",
        tooltip: true,
    },
    {
        alignment: "text-end",
        dataType: "numeric",
        extended: true,
        sysName: "pskTaken",
        tooltip: true,
    },
    {
        alignment: "text-end",
        dataType: "numeric",
        extended: true,
        sysName: "pskNbki",
        tooltip: true,
    },
    {
        alignment: "text-end",
        dataType: "numeric",
        extended: true,
        sysName: "pskOkb",
        tooltip: true,
    },
    {
        alignment: "text-end",
        dataType: "numeric",
        extended: true,
        sysName: "contractPeriodCount",
        tooltip: true,
    },
];

export { TimePeriod, customFields };
