import { format } from "date-fns";
import { nanoid } from "nanoid";
import React from "react";

const TableBody = ({ columns, rows }) => {
    const [selectedRowId, setSelectedRowId] = React.useState(undefined);

    return (
        <tbody className="table-group-divider">
            {rows.map((row) => {
                return <Tr key={row.id} row={row} />;
            })}
        </tbody>
    );

    function Tr({ row }) {
        // TODO: refactor
        return (
            <tr
                id={row.id}
                className={row.id === selectedRowId ? "selected-row" : ""}
                onClick={({ target }) => {
                    const { parentElement } = target;

                    let id = parentElement.id;
                    id = id === selectedRowId ? undefined : id;

                    setSelectedRowId(id);
                }}
            >
                {columns.map((column) => (
                    <td
                        key={nanoid()}
                        className={
                            (row.id === selectedRowId ? "selected-cell" : "") +
                            " " +
                            getClass(column)
                        }
                    >
                        {getValue(row, column)}
                    </td>
                ))}
            </tr>
        );
    }

    function getClass({ status }) {
        return status ? "" : "common";
    }

    function getPaymentStatus(historyList, date) {
        const history = historyList.filter(
            (item) => format(new Date(item.HistoryDate), "MM.yyyy") === date
        );

        return history.length ? history[0].AccountPaymentStatus : null;
    }

    function getValue(loan, column) {
        const value = loan[column.sysNameStatus] || loan[column.sysName];

        if (column.type === "date" && value) {
            return format(new Date(value), "dd.MM.yyyy");
        }

        return column.status
            ? getPaymentStatus(loan.MonthlyHistoryList, column.name)
            : value;
    }
};

export { TableBody };
