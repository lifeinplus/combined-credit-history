import React from "react";
import { nanoid } from "nanoid";

import { formatToMonthYear } from "../../../util";

const Body = ({ columns, data, rowActive }) => {
    const [activeRowId, setActiveRowId] = React.useState(undefined);

    const handleClick = ({ target }) => {
        if (!rowActive) return;
        const tr = target.closest("TR");
        setActiveRowId(tr.id !== activeRowId && tr.id);
    };

    return (
        <tbody className="table-group-divider">
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
            data.MonthlyHistoryList = MonthlyHistoryList.map((item) => ({
                ...item,
                name: formatToMonthYear(item.HistoryDate),
            }));
        }

        return (
            <tr id={data.id} className={tableActive} onClick={handleClick}>
                {columns.map((column) => (
                    <Td key={nanoid()} column={column} data={data} />
                ))}
            </tr>
        );
    }

    function Td(params) {
        const { type } = params.column;
        return !type || type === "common"
            ? getCommonTd(params)
            : getStatusTd(params);
    }

    function getCommonTd({ column, data }) {
        const { sysName, sysNameStatus } = column;
        const { badgeEqual, badgeMore, badgeType } = column;

        const value = data[sysNameStatus] || data[sysName];

        const classNameSpan =
            value > badgeMore || value === badgeEqual
                ? `badge text-bg-${badgeType} badge-loans-data`
                : "";

        return (
            <td className={"common"}>
                <span className={classNameSpan}>{value}</span>
            </td>
        );
    }

    function getStatusTd({ column, data }) {
        const { name } = column;
        const { MonthlyHistoryList } = data;

        const value = MonthlyHistoryList.reduce((result, item) => {
            return item.name === name ? item.AccountPaymentStatus : result;
        }, null);

        const classNameSpan = value ? `cch-badge cch-text-bg-${value}` : "";

        return (
            <td className={"cch-status"}>
                <span className={classNameSpan}>{value}</span>
            </td>
        );
    }
};

export default Body;
