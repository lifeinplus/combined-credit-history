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
    mobileView,
    rowActive,
    rowHover,
    stickyHeader,
    textDifference,
    tooltips,
}) => {
    const activeData = useRowActive(rowActive, data);

    const { sortedData, requestSort, sortConfig } = useSortableData(
        activeData,
        {
            dataType: "amount",
            direction: "asc",
            sysName: "chbPayment",
            sysNameStatus: "chbStatus",
        }
    );

    const [tableWrapperRef, headerRef] = useStickyHeader(stickyHeader);

    const getSortClass = (name) => {
        return sortConfig && sortConfig.sysName === name
            ? sortConfig.direction
            : undefined;
    };

    const tableClassName = joinClasses([
        "table",
        rowHover && "table-hover",
        "table-striped align-middle mb-0",
        mobileView && "table-mobile",
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
                    tooltips={tooltips}
                />
                <Body
                    id={id + "-body"}
                    columns={columns}
                    data={sortedData}
                    mobileView={mobileView}
                    rowActive={rowActive}
                    textDifference={textDifference}
                />
            </table>
        </div>
    );
};

export default Table;
