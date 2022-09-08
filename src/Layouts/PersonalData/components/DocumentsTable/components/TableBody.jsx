import { format } from "date-fns";

// TODO: Refactor
const TableBody = ({ documents }) => {
    return (
        <tbody className="table-group-divider">
            {documents.map((item) => (
                <tr key={item.id}>
                    <td>{item.dataSource}</td>
                    <td>{item.fullName}</td>
                    <td>{formatDate(item.birthDate)}</td>
                    <td>{item.mainDocSeries}</td>
                    <td>{item.mainDocNumber}</td>
                    <td>{formatDate(item.mainDocIssueDate)}</td>
                </tr>
            ))}
        </tbody>
    );

    function formatDate(date) {
        return date ? format(new Date(date), "dd-MM-yyyy") : date;
    }
};

export default TableBody;
