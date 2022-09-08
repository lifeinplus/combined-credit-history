import React from "react";
import { format } from "date-fns";
import { nanoid } from "nanoid";

import { joinClasses } from "../../../../../util";

const TableBody = ({ columns, loans }) => {
    const [selectedRowId, setSelectedRowId] = React.useState(undefined);

    const handleClick = ({ target }) => {
        const { parentElement } = target;
        const { id } = parentElement;
        setSelectedRowId(id !== selectedRowId && id);
    };

    return (
        <tbody className="table-group-divider">
            {loans.map((loan) => (
                <Tr key={loan.id} loan={loan} />
            ))}
        </tbody>
    );

    function Tr({ loan }) {
        const selectedClass = loan.id === selectedRowId ? "selected" : "";

        return (
            <tr id={loan.id} className={selectedClass} onClick={handleClick}>
                {columns.map((column) => (
                    <Td
                        key={nanoid()}
                        column={column}
                        loan={loan}
                        selectedClass={selectedClass}
                    />
                ))}
            </tr>
        );
    }

    function Td({ column, loan, selectedClass }) {
        const commonClass = column.common ? "common" : "";
        const value = getValue(loan, column);

        return (
            <td className={joinClasses([commonClass, selectedClass])}>
                {value}
            </td>
        );
    }

    function getValue(loan, column) {
        const value = loan[column.sysNameStatus] || loan[column.sysName];

        if (column.type === "date" && value) {
            return format(new Date(value), "dd.MM.yyyy");
        }

        return column.common
            ? value
            : getPaymentStatus(loan.MonthlyHistoryList, column.name);
    }

    function getPaymentStatus(historyList, date) {
        const history = historyList.filter(
            (item) => format(new Date(item.HistoryDate), "MM.yyyy") === date
        );

        return history.length ? history[0].AccountPaymentStatus : null;
    }
};

export default TableBody;
