import React from "react";
import { format } from "date-fns";
import { nanoid } from "nanoid";

import { joinClasses } from "../../../../../util";

// TODO - highlight values above zero in delinquency columns
// TODO - highlight the values of the timeliness of payments
const TableBody = ({ columns, data }) => {
    const [selectedRowId, setSelectedRowId] = React.useState(undefined);

    const handleClick = ({ target }) => {
        // BUG - lines are not highlighted
        const { parentElement } = target;
        const { id } = parentElement;
        setSelectedRowId(id !== selectedRowId && id);
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
            <tr className={selectedClass} onClick={handleClick}>
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
        const commonClass = column.common ? "common" : "";
        const value = getValue(column, data);

        return (
            <td className={joinClasses([commonClass, selectedClass])}>
                {value}
            </td>
        );
    }

    function getValue(column, data) {
        const value = data[column.sysNameStatus] || data[column.sysName];

        if (column.type === "date" && value) {
            return format(new Date(value), "dd.MM.yyyy");
        }

        return column.common
            ? value
            : getPaymentStatus(data.MonthlyHistoryList, column.name);
    }

    function getPaymentStatus(historyList, date) {
        const history = historyList.filter(
            (item) => format(new Date(item.HistoryDate), "MM.yyyy") === date
        );

        return history.length ? history[0].AccountPaymentStatus : null;
    }
};

export default TableBody;
