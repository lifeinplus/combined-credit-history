import { forwardRef } from "react";
import { joinClasses } from "../../../util";

const Head = forwardRef(({ columns, getSortClass, requestSort }, ref) => {
    return (
        <thead className="align-middle" ref={ref}>
            <tr className="table-primary">
                {columns.map((item) => (
                    <Th
                        key={item.sysName || item.name}
                        column={item}
                        getSortClass={getSortClass}
                        requestSort={requestSort}
                    />
                ))}
            </tr>
        </thead>
    );

    function Th({ column, getSortClass, requestSort }) {
        const extendedClass = column.extended && "table-info";
        const sortClass = column.sortable && getSortClass(column.sysName);

        return column.type === "common" ? (
            <th
                className={joinClasses([extendedClass, sortClass])}
                onClick={() => {
                    requestSort(column);
                }}
                scope="col"
            >
                {column.name}
            </th>
        ) : (
            <th scope="col">{column.name}</th>
        );
    }
});

export default Head;
