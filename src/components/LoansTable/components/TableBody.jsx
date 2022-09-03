import { format } from "date-fns";
import { nanoid } from "nanoid";

const TableBody = ({ loans, columns }) => {
    return (
        <tbody>
            {loans.map((loan) => (
                <tr key={nanoid()}>
                    {columns.map((column) => (
                        <td key={nanoid()}>{getValue(loan, column)}</td>
                    ))}
                </tr>
            ))}
        </tbody>
    );

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
