import { useState } from "react";
import { useTranslation } from "react-i18next";

import { getDateTimeFormat, langs } from "../../../util";

const Body = ({ id, columns, data, mobileView, rowActive, textDifference }) => {
    const [activeRowId, setActiveRowId] = useState(undefined);

    const { i18n } = useTranslation();
    const lang = langs[i18n.resolvedLanguage];
    const numberFormat = new Intl.NumberFormat(lang.locale);

    const firstDataItem = data.length ? data[0] : {};
    const statusFormat = getDateTimeFormat("ru", "tableStatus");
    const tableFormat = getDateTimeFormat(lang.locale, "table");

    const handleClick = ({ target }) => {
        if (!rowActive) return;
        const { id } = target.closest("TR");
        setActiveRowId(id !== activeRowId ? id : undefined);
    };

    return (
        <tbody>
            {data.map((element, index) => {
                const key = `${id}-row${index}`;
                return <Row key={key} id={key} data={element} />;
            })}
        </tbody>
    );

    function Row({ id, data }) {
        const { MonthlyHistoryList, activeId } = data;

        const tableActive =
            rowActive && activeId === activeRowId ? "table-active" : "";

        if (MonthlyHistoryList) {
            data.MonthlyHistoryList = MonthlyHistoryList.map((element) => {
                const milliseconds = Date.parse(element.HistoryDate);
                return {
                    ...element,
                    name: statusFormat.format(milliseconds),
                };
            });
        }

        return (
            <tr id={activeId} className={tableActive} onClick={handleClick}>
                {columns.map((element, index) => {
                    const key = `${id}-cell${index}`;
                    return (
                        <Cell key={key} id={key} column={element} data={data} />
                    );
                })}
            </tr>
        );
    }

    function Cell(params) {
        const { id, column } = params;
        const { name, type } = column;

        const { cell, badge, value } =
            type === "common" || !type
                ? getCommonData(params)
                : getStatusData(params);

        const label = mobileView && name;

        return (
            <td className={cell} data-label={label}>
                <span className={badge}>
                    {textDifference ? (
                        <DiffBadges id={id} data={value} />
                    ) : (
                        value
                    )}
                </span>
            </td>
        );
    }

    function DiffBadges({ id, data }) {
        return data.map((element, index) => {
            const { spanText, text } = element;
            const key = `${id}-span${index}`;

            return spanText ? (
                <span key={key} className={"cch-badge cch-diff cch-text-bg-A"}>
                    {spanText}
                </span>
            ) : (
                text
            );
        });
    }

    function getCommonData({ column, data }) {
        const { alignment, dataType, sysName, sysNameStatus } = column;
        const { badgeEqual, badgeMore, badgeType } = column;

        const currentSource = data[sysNameStatus] ?? data[sysName] ?? "";

        const badge =
            currentSource > badgeMore || currentSource === badgeEqual
                ? `cch-badge cch-text-bg-${badgeType}`
                : undefined;

        const firstSource = firstDataItem[sysName];

        const firstValue = prepare(firstSource, dataType);
        const currentValue = prepare(currentSource, dataType);

        const value = textDifference
            ? compare(firstValue, currentValue)
            : currentValue;

        return { cell: alignment, badge, value };
    }

    function getStatusData({ column, data }) {
        const { name: columnName } = column;
        const { MonthlyHistoryList } = data;

        const value = MonthlyHistoryList.reduce((accumulator, currentValue) => {
            const { name, AccountPaymentStatus } = currentValue;
            return name === columnName ? AccountPaymentStatus : accumulator;
        }, null);

        const badge = value ? `cch-badge cch-status cch-text-bg-${value}` : "";

        return { cell: "cch-status-td", badge, value };
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

        return result;
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
