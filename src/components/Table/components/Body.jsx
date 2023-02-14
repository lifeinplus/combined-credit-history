import React from "react";
import { format } from "date-fns";
import { nanoid } from "nanoid";

import { joinClasses } from "../../../util";

const Body = ({ columns, data, hover }) => {
    const [selectedRowId, setSelectedRowId] = React.useState(undefined);

    const handleClick = ({ target }) => {
        if (!hover) return;
        const tr = target.closest("TR");
        setSelectedRowId(tr.id !== selectedRowId && tr.id);
    };

    return (
        <tbody className="table-group-divider">
            {data.map((item) => (
                <Tr key={item.id} data={item} />
            ))}
        </tbody>
    );

    function Tr({ data }) {
        const selectedClass = data.id === selectedRowId ? "selected" : "";

        return (
            <tr id={data.id} className={selectedClass} onClick={handleClick}>
                {columns.map((column) => (
                    <Td
                        key={nanoid()}
                        column={column}
                        data={data}
                        selectedClass={selectedClass}
                    />
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

    function getCommonTd({ column, data, selectedClass }) {
        const { sysName, sysNameStatus } = column;
        const { badgeEqual, badgeMore, badgeType } = column;

        const classNameTd = joinClasses(["common", selectedClass]);
        const value = data[sysNameStatus] || data[sysName];

        const classNameSpan =
            value > badgeMore || value === badgeEqual
                ? `badge text-bg-${badgeType} badge-loans-data`
                : "";

        return (
            <td className={classNameTd}>
                <span className={classNameSpan}>{value}</span>
            </td>
        );
    }

    function getStatusTd({ column, data, selectedClass }) {
        const { name } = column;
        const { MonthlyHistoryList } = data;

        const filtered = MonthlyHistoryList.filter(
            (item) => format(new Date(item.HistoryDate), "MM.yyyy") === name
        );

        const value = filtered.length ? filtered[0].AccountPaymentStatus : null;
        const cchStatus = `table-cch-status-${value}`;
        const classNameTd = joinClasses(["status", cchStatus, selectedClass]);

        return (
            <td className={classNameTd}>
                <span>{value}</span>
            </td>
        );
    }
};

export default Body;
