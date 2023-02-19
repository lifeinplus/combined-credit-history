import { joinClasses } from "../../util";

import { useSortableData } from "./hooks/useSortableData";

import Body from "./components/Body";
import Head from "./components/Head";

const Table = ({ columns, data, rowActive, rowHover }) => {
    const { sortedData, requestSort, sortConfig } = useSortableData(data, {
        dataType: "amount",
        direction: "asc",
        sysName: "calculatedBkiPayment",
        sysNameStatus: "calculatedBkiStatus",
    });

    const getSortClass = (name) => {
        return sortConfig && sortConfig.sysName === name
            ? sortConfig.direction
            : undefined;
    };

    const tableHover = rowHover ? "table-hover" : "";
    const tableClassName = joinClasses([
        "table",
        tableHover,
        "table-striped align-middle mb-0",
    ]);

    return (
        <div className="table-responsive border rounded mb-3">
            <table className={tableClassName}>
                <Head
                    columns={columns}
                    getSortClass={getSortClass}
                    requestSort={requestSort}
                />
                <Body
                    columns={columns}
                    data={sortedData}
                    rowActive={rowActive}
                />
            </table>
        </div>
    );
};

export default Table;
