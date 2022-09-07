import "./style.css";

import { useSortableData } from "./hooks/useSortableData";

import { TableBody } from "./components/TableBody";
import { TableHead } from "./components/TableHead";

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
        <div className="row pe-1">
            <div className="col pe-1">
                <div className="table-responsive mb-2">
                    <table className="table table-striped mb-0">
                        <TableHead
                            columns={columns}
                            getSortClass={getSortClass}
                            requestSort={requestSort}
                        />
                        <TableBody columns={columns} loans={sortedData} />
                    </table>
                </div>
            </div>
        </div>
    );
};

export { LoansTable };
