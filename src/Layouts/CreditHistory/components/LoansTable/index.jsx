import { useSortableData } from "./hooks/useSortableData";

import TableBody from "./components/TableBody";
import TableHead from "./components/TableHead";

// TODO - make a generic table component
const LoansTable = ({ columns, rows }) => {
    const { sortedData, requestSort, sortConfig } = useSortableData(rows, {
        direction: "asc",
        sysName: "calculatedBkiPayment",
        sysNameStatus: "calculatedBkiStatus",
        type: "amount",
    });

    const getSortClass = (name) => {
        return sortConfig && sortConfig.sysName === name
            ? sortConfig.direction
            : undefined;
    };

    return (
        <div className="row">
            <div className="col">
                <div className="table-responsive border rounded mb-3">
                    <table className="table table-striped align-middle mb-0">
                        <TableHead
                            columns={columns}
                            getSortClass={getSortClass}
                            requestSort={requestSort}
                        />
                        <TableBody columns={columns} data={sortedData} />
                    </table>
                </div>
            </div>
        </div>
    );
};

export default LoansTable;
