import { joinClasses } from "../../../../../util";

const TableHead = ({ columns, getSortClass, requestSort }) => {
    return (
        <thead>
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
        const colorClass = column.extended && "table-info";
        const sortClass = column.common && getSortClass(column.sysName);

        return column.common ? (
            <th
                className={joinClasses([colorClass, sortClass])}
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
};

export default TableHead;
