function Sorting(loans) {
    const _loans = loans ? [...loans] : [];

    let _compareMoreResult = 1;
    let _compareLessResult = -1;

    const _compareFunctions = {
        amount: function (loan1, loan2) {
            const status1 = loan1[this.sysNameStatus];
            const status2 = loan2[this.sysNameStatus];

            if (status1 === "Ошибка вычисления") return _compareLessResult;
            if (status2 === "Ошибка вычисления") return _compareMoreResult;

            const value1 = loan1[this.sysName];
            const value2 = loan2[this.sysName];

            if (isNaN(value1)) return _compareMoreResult;
            if (isNaN(value2)) return _compareLessResult;

            return getCompareResult(value1, value2);
        },

        numeric: function (loan1, loan2) {
            const status1 = loan1[this.sysNameStatus];
            const status2 = loan2[this.sysNameStatus];

            if (status1 === "Ошибка вычисления") return _compareLessResult;
            if (status2 === "Ошибка вычисления") return _compareMoreResult;

            const value1 = loan1[this.sysName];
            const value2 = loan2[this.sysName];

            if (isNaN(value1)) return _compareMoreResult;
            if (isNaN(value2)) return _compareLessResult;

            return getCompareResult(value1, value2);
        },

        numericArray: function (loan1, loan2) {
            const stringValue1 = loan1[this.sysName] || "";
            const stringValue2 = loan2[this.sysName] || "";

            const array1 = stringValue1.split(",");
            const array2 = stringValue2.split(",");

            const value1 = parseInt(array1[0]);
            const value2 = parseInt(array2[0]);

            if (isNaN(value1)) return _compareMoreResult;
            if (isNaN(value2)) return _compareLessResult;

            return getCompareResult(value1, value2);
        },

        text: function (loan1, loan2) {
            const value1 = loan1[this.sysName] || "";
            const value2 = loan2[this.sysName] || "";

            return getCompareResult(value1, value2);
        },

        date: function (loan1, loan2) {
            const value1 = loan1[this.sysName];
            const value2 = loan2[this.sysName];

            if (!value1) return _compareLessResult;
            if (!value2) return _compareMoreResult;

            const date1 = new Date(value1);
            const date2 = new Date(value2);

            return getCompareResult(date1, date2);
        },
    };

    this.onClick = function (event, field) {
        const compare = _compareFunctions[field.type].bind(field);
        _loans.sort(compare);
    };

    this.getLoans = function () {
        return _loans;
    };

    function getCompareResult(value1, value2) {
        if (value1 > value2) return _compareMoreResult;
        if (value1 < value2) return _compareLessResult;
    }
}

export { Sorting };
