import { useTranslation } from "react-i18next";

const TableHead = ({ columns, getSortClass, requestSort }) => {
    const { t } = useTranslation(["credit_history"]);

    return (
        <thead>
            <tr className="table-warning">
                {columns.map((column) => (
                    <Th
                        key={column.sysName || column.name}
                        column={column}
                        getSortClass={getSortClass}
                        requestSort={requestSort}
                    />
                ))}
            </tr>
        </thead>
    );

    function Th({ column, getSortClass, requestSort }) {
        const name = column.name || t(`columns.${column.sysName}`);

        const colorClass = column.extended && "table-info";
        const sortClass = !column.status && getSortClass(column.sysName);

        return column.status ? (
            <th scope="col">{name}</th>
        ) : (
            <th
                className={[colorClass, sortClass]
                    .filter((item) => item)
                    .join(" ")}
                onClick={() => {
                    requestSort(column);
                }}
                scope="col"
            >
                {name}
            </th>
        );
    }
};

export { TableHead };
