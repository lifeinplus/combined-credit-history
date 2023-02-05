import { format } from "date-fns";
import { nanoid } from "nanoid";

const TableBody = ({ columns, data }) => {
    return (
        <tbody className="table-group-divider">
            {data.map((item) => (
                <Tr key={item.id} data={item} />
            ))}
        </tbody>
    );

    function Tr({ data }) {
        return (
            <tr>
                {columns.map((column) => (
                    <Td key={nanoid()} column={column} data={data} />
                ))}
            </tr>
        );
    }

    function Td({ column, data }) {
        const value = getValue(column, data);
        return <td>{value}</td>;
    }

    function getValue(column, data) {
        const value = data[column.sysName];

        if (column.type === "date" && value) {
            return format(new Date(value), "dd.MM.yyyy");
        }

        return value;
    }
};

export default TableBody;
