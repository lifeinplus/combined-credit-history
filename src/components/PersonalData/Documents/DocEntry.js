import { format } from "date-fns";

const DocEntry = (props) => {
    const { document } = props;

    const birthDate = formatDate(document.birthDate);
    const mainDocIssueDate = formatDate(document.mainDocIssueDate);

    return (
        <tr>
            <td>{document.dataSource}</td>
            <td>{document.fullName}</td>
            <td>{birthDate}</td>
            <td>{document.mainDocSeries}</td>
            <td>{document.mainDocNumber}</td>
            <td>{mainDocIssueDate}</td>
        </tr>
    );

    function formatDate(date) {
        return date ? format(new Date(date), "yyyy-MM-dd") : date;
    }
};

export { DocEntry };
