function TimePeriod(lastDate, loans) {
    const _lastDate = new Date(lastDate);
    const _loans = loans || [];

    this.getTextMonths = function () {
        const dates = getMonthDates();

        return dates.map((item) => {
            return new Intl.DateTimeFormat("ru", {
                month: "numeric",
                year: "numeric",
            }).format(item);
        });
    };

    function getMonthDates() {
        const result = [_lastDate];
        const monthsNumber = getMonthsNumber();

        for (let i = 1; i < monthsNumber; i++) {
            let previous = result[i - 1];

            let date = new Date(previous.getTime());
            date.setMonth(date.getMonth() - 1);

            result.push(date);
        }

        return result;
    }

    function getMonthsNumber() {
        const startDate = getStartDate();
        const startFullYear = startDate.getFullYear();
        const startMonth = startDate.getMonth();

        const endDate = _lastDate;
        const endFullYear = endDate.getFullYear();
        const endMonth = endDate.getMonth();

        return (endFullYear - startFullYear) * 12 + (endMonth + 1) - startMonth;
    }

    function getStartDate() {
        let result = _lastDate;

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
