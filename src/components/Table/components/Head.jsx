import { forwardRef } from "react";
import { useTheme } from "../../../hooks/ThemeContext";
import { joinClasses } from "../../../util";
import { useTooltip } from "../hooks/useTooltip";

const Head = forwardRef(
    ({ columns, getSortClass, requestSort, tooltips }, ref) => {
        const theme = useTheme();
        useTooltip(tooltips, columns);

        return (
            <thead className="align-middle" ref={ref}>
                <tr
                    className={
                        theme === "light"
                            ? "table-primary"
                            : "cch-table dark primary"
                    }
                >
                    {columns.map((item) => (
                        <Th
                            key={item.sysName || item.name}
                            column={item}
                            getSortClass={getSortClass}
                            requestSort={requestSort}
                            theme={theme}
                        />
                    ))}
                </tr>
            </thead>
        );
    }
);

const Th = ({ column, getSortClass, requestSort, theme }) => {
    const { alignment, sysName, type } = column;
    const { extended, sortable } = column;
    const { name, tooltipName } = column;

    const common = type === "common";

    const extendedClass =
        common &&
        extended &&
        (theme === "light" ? "table-info" : "cch-table dark info");

    const sortableThemeClass = common && sortable && `sortable ${theme}`;
    const sortClass = common && sortable && getSortClass(sysName);

    return (
        <th
            className={joinClasses([
                extendedClass,
                sortableThemeClass,
                sortClass,
                alignment,
            ])}
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
