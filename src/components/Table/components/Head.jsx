import { forwardRef } from "react";
import { useTooltip } from "../hooks/useTooltip";
import { joinClasses } from "../../../util";

const Head = forwardRef(
    ({ columns, getSortClass, requestSort, tooltips }, ref) => {
        useTooltip(tooltips, columns);

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
    }
);

const Th = ({ column, getSortClass, requestSort }) => {
    const { alignment, sysName, type } = column;
    const { extended, sortable } = column;
    const { name, tooltipName } = column;

    const common = type === "common";

    const extendedClass = common && extended && "table-info";
    const sortClass = common && sortable && getSortClass(sysName);

    return (
        <th
            className={joinClasses([extendedClass, sortClass, alignment])}
            data-bs-toggle={tooltipName && "tooltip"}
            data-bs-placement={tooltipName && "top"}
            data-bs-title={tooltipName}
            onClick={common ? () => requestSort(column) : undefined}
            scope="col"
        >
            {name}
        </th>
    );
};

export default Head;
