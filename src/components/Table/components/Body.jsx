import React from "react";
import { format } from "date-fns";
import { nanoid } from "nanoid";

import { joinClasses } from "../../../util";

const Body = ({ columns, data, hover }) => {
    const [selectedRowId, setSelectedRowId] = React.useState(undefined);

    const handleClick = ({ target }) => {
        if (!hover) return;
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
        const commonClass = column.common ? "common" : "";

        const value =
            column.type === "status"
                ? getPaymentStatus(data.MonthlyHistoryList, column.name)
                : data[column.sysNameStatus] || data[column.sysName];

        return (
            <td className={joinClasses([commonClass, selectedClass])}>
                {value}
            </td>
        );
    }

    function getPaymentStatus(historyList, date) {
        const history = historyList.filter(
            (item) => format(new Date(item.HistoryDate), "MM.yyyy") === date
        );

        return history.length ? history[0].AccountPaymentStatus : null;
    }
};

export default Body;
