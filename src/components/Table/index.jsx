import { useSortableData } from "./hooks/useSortableData";

import Body from "./components/Body";
import Head from "./components/Head";

const Table = ({ columns, data, hover }) => {
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

    return (
        <div className="table-responsive border rounded mb-3">
            <table className="table table-striped align-middle mb-0">
                <Head
                    columns={columns}
                    getSortClass={getSortClass}
                    requestSort={requestSort}
                />
                <Body columns={columns} data={sortedData} hover={hover} />
            </table>
        </div>
    );
};

export default Table;
