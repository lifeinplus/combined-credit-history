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

    function Td({ column, data, selectedClass }) {
        const { isCommon } = column;

        const commonClass = isCommon ? "common" : "";
        const value = getValue(column, data);
        const badgeClass = getBadgeClass(column, value);

        return (
            <td className={joinClasses([commonClass, selectedClass])}>
                <span className={badgeClass}>{value}</span>
            </td>
        );
    }

    function getBadgeClass(column, value) {
        const { badgeEqual, badgeMore, badgeType } = column;
        return value > badgeMore || value === badgeEqual
            ? `badge text-bg-${badgeType} badge-loans-data`
            : "";
    }

    function getPaymentStatus(historyList, date) {
        const history = historyList.filter(
            (item) => format(new Date(item.HistoryDate), "MM.yyyy") === date
        );

        return history.length ? history[0].AccountPaymentStatus : null;
    }

    function getValue(column, data) {
        const { name, sysName, sysNameStatus, type } = column;
        const { MonthlyHistoryList } = data;

        return type === "status"
            ? getPaymentStatus(MonthlyHistoryList, name)
            : data[sysNameStatus] || data[sysName];
    }
};

export default Body;
