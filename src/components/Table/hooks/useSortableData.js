import React from "react";
import { parse } from "date-fns";

const useSortableData = (data, config = null) => {
    const [sortConfig, setSortConfig] = React.useState(config);
    const { dataType, direction, sysName, sysNameStatus } = sortConfig;

    const _compareFunctions = {
        amount(a, b) {
            const statusA = a[sysNameStatus];
            const statusB = b[sysNameStatus];

            if (statusA === "Ошибка вычисления") return { order: -1 };
            if (statusB === "Ошибка вычисления") return { order: 1 };

            const valueA = a[sysName];
            const valueB = b[sysName];

            if (isNaN(valueA)) return { order: 1 };
            if (isNaN(valueB)) return { order: -1 };

            return { valueA, valueB };
        },

        date(a, b) {
            const formatString = "dd.MM.yyyy";
            const referenceDate = new Date();

            const valueA = parse(a[sysName], formatString, referenceDate) || "";
            const valueB = parse(b[sysName], formatString, referenceDate) || "";

            if (!valueA) return { order: 1 };
            if (!valueB) return { order: -1 };

            return { valueA, valueB };
        },

        numeric(a, b) {
            const statusA = a[sysNameStatus];
            const statusB = b[sysNameStatus];

            if (statusA === "Ошибка вычисления") return { order: -1 };
            if (statusB === "Ошибка вычисления") return { order: 1 };

            const valueA = a[sysName];
            const valueB = b[sysName];

            if (isNaN(valueA)) return { order: 1 };
            if (isNaN(valueB)) return { order: -1 };

            return { valueA, valueB };
        },

        numericArray(a, b) {
            const stringA = a[sysName] || "";
            const stringB = b[sysName] || "";

            const arrayA = stringA.split(",");
            const arrayB = stringB.split(",");

            const valueA = parseInt(arrayA[0]);
            const valueB = parseInt(arrayB[0]);

            if (isNaN(valueA)) return { order: 1 };
            if (isNaN(valueB)) return { order: -1 };

            return { valueA, valueB };
        },

        text(a, b) {
            const valueA = a[sysName] || "";
            const valueB = b[sysName] || "";

            if (!valueA) return { order: 1 };
            if (!valueB) return { order: -1 };

            return { valueA, valueB };
        },
    };

    const sortedData = React.useMemo(() => {
        const more = direction === "asc" ? 1 : -1;
        const less = direction === "asc" ? -1 : 1;

        const result = [...data].sort((a, b) => {
            const result = _compareFunctions[dataType](a, b);
            const { order, valueA, valueB } = result;

            if (order) return order;

            if (valueA > valueB) return more;
            if (valueA < valueB) return less;
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

export { useSortableData };
