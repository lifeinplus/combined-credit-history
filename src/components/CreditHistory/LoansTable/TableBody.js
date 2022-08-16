import { format } from "date-fns";
import { nanoid } from "nanoid";

const TableBody = (props) => {
    return (
        <tbody>
            {props.loans.map((loan) => (
                <tr key={nanoid()}>
                    {props.fields.map((field) => (
                        <td key={nanoid()}>{getValue(loan, field)}</td>
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

    function getValue(loan, field) {
        const value = loan[field.sysNameStatus] || loan[field.sysName];

        if (field.type === "date" && value) {
            return format(new Date(value), "dd.MM.yyyy");
        }

        return field.status
            ? getPaymentStatus(loan.MonthlyHistoryList, field.name)
            : value;
    }
};

export { TableBody };
