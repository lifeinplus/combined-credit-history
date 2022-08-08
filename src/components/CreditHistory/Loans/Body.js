import { format } from "date-fns";
import { nanoid } from "nanoid";

const Body = (props) => {
    return (
        <tbody>
            {props.loans.map((loan) => (
                <tr key={nanoid()}>
                    {props.loanFields.map((field) => (
                        <td key={nanoid()}>{getValue(field, loan)}</td>
                    ))}
                </tr>
            ))}
        </tbody>
    );

    function getValue(field, loan) {
        return field.status
            ? getPaymentStatus(loan.MonthlyHistoryList, field.name)
            : loan[field.sysName];
    }

    function getPaymentStatus(historyList, date) {
        const history = historyList.filter(
            (item) => format(new Date(item.HistoryDate), "MM.yyyy") === date
        );

        return history.length ? history[0].AccountPaymentStatus : null;
    }
};

export default Body;
