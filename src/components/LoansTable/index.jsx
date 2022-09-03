import "./style.css";

import { TimePeriod, respectiveColumns } from "./util";
import { useSortableData } from "./hooks/useSortableData";

import { TableBody } from "./components/TableBody";
import { TableHead } from "./components/TableHead";

const LoansTable = (props) => {
    const columns = defineColumns();

    const {
        items: loans,
        requestSort,
        sortConfig,
    } = useSortableData(props.loans, {
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
        <div className="table-responsive">
            <table className="table table-bordered table-striped table-hover">
                <TableHead {...{ columns, getSortClass, requestSort }} />
                <TableBody {...{ columns, loans }} />
            </table>
        </div>
    );

    function defineColumns() {
        const result = respectiveColumns.filter(
            (item) =>
                !item.extended || (item.extended && props.showExtendedData)
        );

        const timePeriod = new TimePeriod(props.loans);
        const textMonths = timePeriod.getTextMonths(props.lastBkiCreationDate);

        textMonths.forEach((item) => result.push({ name: item, status: true }));

        return result;
    }
};

export { LoansTable };
