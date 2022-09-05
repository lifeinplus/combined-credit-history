import "./style.css";

import { useSortableData } from "./hooks/useSortableData";

import { TableBody } from "./components/TableBody";
import { TableHead } from "./components/TableHead";

const LoansTable = ({ columns, data }) => {
    const { sortedData, requestSort, sortConfig } = useSortableData(data, {
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
                <div className="table-responsive">
                    <table className="table table-bordered table-striped table-hover">
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

export { LoansTable };
