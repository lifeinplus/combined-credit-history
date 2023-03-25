import { useRowActive } from "./hooks/useRowActive";
import { useSortableData } from "./hooks/useSortableData";
import { useStickyHeader } from "./hooks/useStickyHeader";

import Head from "./components/Head";
import Body from "./components/Body";

import { joinClasses } from "../../util";

const Table = ({
    id,
    columns,
    data,
    rowActive,
    rowHover,
    stickyHeader,
    textDifference,
}) => {
    const activeData = useRowActive(rowActive, data);

    const { sortedData, requestSort, sortConfig } = useSortableData(
        activeData,
        {
            dataType: "amount",
            direction: "asc",
            sysName: "calculatedBkiPayment",
            sysNameStatus: "calculatedBkiStatus",
        }
    );

    const [tableWrapperRef, headerRef] = useStickyHeader(stickyHeader);

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
        <div
            className="table-responsive border rounded mb-3"
            ref={tableWrapperRef}
        >
            <table className={tableClassName}>
                <Head
                    columns={columns}
                    getSortClass={getSortClass}
                    ref={headerRef}
                    requestSort={requestSort}
                />
                <Body
                    id={id + "-body"}
                    columns={columns}
                    data={sortedData}
                    rowActive={rowActive}
                    textDifference={textDifference}
                />
            </table>
        </div>
    );
};

export default Table;
