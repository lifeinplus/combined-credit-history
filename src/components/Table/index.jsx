import { useTheme } from "../../hooks/ThemeContext";
import { joinClasses } from "../../util";

import Head from "./components/Head";
import Body from "./components/Body";
import ScrollButtons from "./components/ScrollButtons";

import { useRowActive } from "./hooks/useRowActive";
import { useSortableData } from "./hooks/useSortableData";
import { useStickyHeader } from "./hooks/useStickyHeader";
import { useTableScroll } from "./hooks/useTableScroll";

const Table = ({
    id,
    columns,
    data,
    mobileView,
    rowActive,
    rowHover,
    scrolling,
    stickyHeader,
    textDifference,
    tooltips,
}) => {
    const rowActiveData = useRowActive(rowActive, data);
    const theme = useTheme();

    const { sortedData, requestSort, sortConfig } = useSortableData(
        rowActiveData,
        {
            dataType: "amount",
            direction: "asc",
            sysName: "chbPayment",
            sysNameStatus: "chbPaymentStatus",
        }
    );

    const [scrollWrapperRef, btnRefs, handleScroll] = useTableScroll(scrolling);
    const [tableWrapperRef, headerRef] = useStickyHeader(stickyHeader);

    const getSortClass = (name) => {
        return sortConfig && sortConfig.sysName === name
            ? sortConfig.direction
            : undefined;
    };

    return (
        <div
            id={id}
            className={joinClasses([
                "table-responsive rounded mb-3",
                "border",
                theme === "dark" && "cch-border-dark",
            ])}
            ref={(node) => {
                tableWrapperRef.current = node;
                scrollWrapperRef.current = node;
            }}
        >
            {scrolling && (
                <ScrollButtons
                    btnRefs={btnRefs}
                    handleScroll={handleScroll}
                    wrapperRef={scrollWrapperRef}
                />
            )}
            <table
                className={joinClasses([
                    "table",
                    `table-${theme}`,
                    `cch-table ${theme}`,
                    rowHover && `table-hover`,
                    "table-striped align-middle mb-0",
                    mobileView && "table-mobile",
                ])}
            >
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
