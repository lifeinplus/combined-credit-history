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
        const { alignment, extended, name, sortable, sysName, type } = column;

        const common = type === "common";

        const extendedClass = common && extended && "table-info";
        const sortClass = common && sortable && getSortClass(sysName);
        const onClick = common ? () => requestSort(column) : undefined;

        return (
            <th
                className={joinClasses([extendedClass, sortClass, alignment])}
                onClick={onClick}
                scope="col"
            >
                {name}
            </th>
        );
    }
});

export default Head;
