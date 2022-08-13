function TimePeriod(loans) {
    const _loans = loans || [];

    this.getTextMonths = function (lastDate) {
        const dates = getMonthDates(lastDate);

        return dates.map((item) => {
            return new Intl.DateTimeFormat("ru", {
                month: "numeric",
                year: "numeric",
            }).format(item);
        });
    };

    function getMonthDates(lastDate) {
        const _lastDate = new Date(lastDate);

        const result = [_lastDate];
        const monthsNumber = getMonthsNumber(_lastDate);

        for (let i = 1; i < monthsNumber; i++) {
            let previous = result[i - 1];

            let date = new Date(previous.getTime());
            date.setMonth(date.getMonth() - 1);

            result.push(date);
        }

        return result;
    }

    function getMonthsNumber(lastDate) {
        const startDate = getStartDate(lastDate);
        const startFullYear = startDate.getFullYear();
        const startMonth = startDate.getMonth();

        const endDate = lastDate;
        const endFullYear = endDate.getFullYear();
        const endMonth = endDate.getMonth();

        return (endFullYear - startFullYear) * 12 + (endMonth + 1) - startMonth;
    }

    function getStartDate(lastDate) {
        let result = lastDate;

        _loans.forEach((loan) => {
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

export { TimePeriod };
