import { useMemo, useState } from "react";

const useSortableData = (data = [], config = {}) => {
    const [sortConfig, setSortConfig] = useState(config);

    const sortedData = useMemo(() => {
        const { dataType, direction, sysName, sysNameStatus } = sortConfig;

        const more = direction === "asc" ? 1 : -1;
        const less = direction === "asc" ? -1 : 1;

        const result = [...data].sort((a, b) => {
            const compare = getCompareFunction(dataType);

            const result = compare({
                statusA: a[sysNameStatus],
                statusB: b[sysNameStatus],
                valueA: a[sysName],
                valueB: b[sysName],
            });

            const { order, resultA, resultB } = result;

            if (order) return order;
            if (resultA > resultB) return more;
            if (resultA < resultB) return less;

            return null;
        });

        return result;
    }, [data, sortConfig]);

    const requestSort = (field) => {
        let direction = "asc";

        if (
            sortConfig &&
            sortConfig.sysName === field.sysName &&
            sortConfig.direction === "asc"
        ) {
            direction = "desc";
        }

        setSortConfig({ ...field, direction });
    };

    return { sortedData, requestSort, sortConfig };
};

function getCompareFunction(type) {
    const _compareFunctions = {
        amount({ statusA, statusB, valueA, valueB }) {
            if (statusA === "Ошибка вычисления") return { order: -1 };
            if (statusB === "Ошибка вычисления") return { order: 1 };

            if (isNaN(valueA)) return { order: 1 };
            if (isNaN(valueB)) return { order: -1 };

            return { resultA: valueA, resultB: valueB };
        },

        date({ valueA, valueB }) {
            const resultA = Date.parse(valueA) || "";
            const resultB = Date.parse(valueB) || "";

            if (!resultA) return { order: 1 };
            if (!resultB) return { order: -1 };

            return { resultA, resultB };
        },

        numeric({ statusA, statusB, valueA, valueB }) {
            if (statusA === "Ошибка вычисления") return { order: -1 };
            if (statusB === "Ошибка вычисления") return { order: 1 };

            if (isNaN(valueA)) return { order: 1 };
            if (isNaN(valueB)) return { order: -1 };

            return { resultA: valueA, resultB: valueB };
        },

        numericArray({ valueA = "", valueB = "" }) {
            const arrayA = valueA.split(",");
            const arrayB = valueB.split(",");

            const resultA = parseInt(arrayA[0]);
            const resultB = parseInt(arrayB[0]);

            if (isNaN(resultA)) return { order: 1 };
            if (isNaN(resultB)) return { order: -1 };

            return { resultA, resultB };
        },

        text({ valueA = "", valueB = "" }) {
            if (!valueA) return { order: 1 };
            if (!valueB) return { order: -1 };

            return { resultA: valueA, resultB: valueB };
        },
    };

    return _compareFunctions[type];
}

export { useSortableData };
