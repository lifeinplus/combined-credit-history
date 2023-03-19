import { useState } from "react";
import { useTranslation } from "react-i18next";
import { nanoid } from "nanoid";

import { getDateTimeFormat, langs } from "../../../util";

const Body = ({ columns, data, rowActive, textDifference }) => {
    const [activeRowId, setActiveRowId] = useState(undefined);

    const { i18n } = useTranslation();
    const lang = langs[i18n.resolvedLanguage];
    const numberFormat = new Intl.NumberFormat(lang.locale);

    const firstDataItem = data.length ? data[0] : {};
    const statusFormat = getDateTimeFormat("ru", "tableStatus");
    const tableFormat = getDateTimeFormat(lang.locale, "table");

    const handleClick = ({ target }) => {
        if (!rowActive) return;
        const tr = target.closest("TR");
        setActiveRowId(tr.id !== activeRowId && tr.id);
    };

    return (
        <tbody>
            {data.map((item) => (
                <Tr key={item.id} data={item} />
            ))}
        </tbody>
    );

    function Tr({ data }) {
        const { MonthlyHistoryList } = data;

        const tableActive =
            rowActive && data.id === activeRowId ? "table-active" : "";

        if (MonthlyHistoryList) {
            data.MonthlyHistoryList = MonthlyHistoryList.map((item) => {
                const milliseconds = Date.parse(item.HistoryDate);
                return {
                    ...item,
                    name: statusFormat.format(milliseconds),
                };
            });
        }

        return (
            <tr id={data.id} className={tableActive} onClick={handleClick}>
                {columns.map((column) => (
                    <Td key={nanoid()} column={column} data={data} />
                ))}
            </tr>
        );
    }

    function Td({ column, data }) {
        const { type } = column;

        return type === "common" || !type ? (
            <Common column={column} data={data} />
        ) : (
            <Status column={column} data={data} />
        );
    }

    function Common({ column, data }) {
        const { alignment, dataType } = column;
        const { badgeEqual, badgeMore, badgeType } = column;
        const { sysName, sysNameStatus } = column;

        const currentSourceValue = data[sysNameStatus] ?? data[sysName] ?? "";

        const classNameSpan =
            currentSourceValue > badgeMore || currentSourceValue === badgeEqual
                ? `cch-badge cch-text-bg-${badgeType}`
                : undefined;

        const firstSourceValue = firstDataItem[sysName];

        const firstValue = prepare(firstSourceValue, dataType);
        const currentValue = prepare(currentSourceValue, dataType);

        const comparedValue = textDifference
            ? compare(firstValue, currentValue)
            : undefined;

        return (
            <td className={alignment}>
                <span className={classNameSpan}>
                    {comparedValue || currentValue}
                </span>
            </td>
        );
    }

    function Status({ column, data }) {
        const { name } = column;
        const { MonthlyHistoryList } = data;

        const value = MonthlyHistoryList.reduce((result, item) => {
            return item.name === name ? item.AccountPaymentStatus : result;
        }, null);

        const classNameSpan = value
            ? `cch-badge cch-status cch-text-bg-${value}`
            : "";

        return (
            <td className={"cch-status-td"}>
                <span className={classNameSpan}>{value}</span>
            </td>
        );
    }

    function prepare(sourceValue, dataType) {
        if (dataType === "date" && sourceValue) {
            const milliseconds = Date.parse(sourceValue);
            return tableFormat.format(milliseconds);
        }

        if (dataType === "amount" && !isNaN(sourceValue)) {
            return numberFormat.format(sourceValue);
        }

        return sourceValue;
    }

    function compare(valueA, valueB) {
        let result = [];

        const arrayA = valueA.split(" ");
        const arrayB = valueB.split(" ");

        const maxLength = Math.max(arrayA.length, arrayB.length);

        for (let i = 0; i < maxLength; i++) {
            const stringA = arrayA[i] || "";
            const stringB = arrayB[i] || "";

            let compared = compareStrings(stringA, stringB);

            if (i < maxLength - 1) {
                compared = compared.concat([{ text: " " }]);
            }

            result = result.concat(compared);
        }

        return result.map(({ spanText, text }) => {
            return spanText ? (
                <span
                    key={nanoid()}
                    className={"cch-badge cch-diff cch-text-bg-A"}
                >
                    {spanText}
                </span>
            ) : (
                text
            );
        });
    }

    function compareStrings(stringA, stringB) {
        let result = [];
        let text = "";
        let spanText = "";
        const maxLength = Math.max(stringA.length, stringB.length);

        for (let i = 0; i < maxLength; i++) {
            const charA = stringA[i] || "";
            const charB = stringB[i] || "";

            if (charA !== charB && charB) {
                if (text) {
                    result.push({ text });
                    text = "";
                }

                spanText += charB;
                continue;
            }

            if (spanText) {
                result.push({ spanText });
                spanText = "";
            }

            text += charB;
        }

        if (spanText) result.push({ spanText });
        if (text) result.push({ text });

        return result;
    }
};

export default Body;
