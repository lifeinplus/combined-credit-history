import { nanoid } from "nanoid";

import TableBody from "./components/TableBody";
import TableHead from "./components/TableHead";

const DocumentsTable = ({ data }) => {
    const documents = data.personInfo.map((item) => ({
        ...item,
        id: nanoid(),
    }));

    return (
        <div className="table-responsive border rounded mb-3 mb-lg-0">
            <table className="table table-striped align-middle mb-0">
                <TableHead />
                <TableBody documents={documents} />
            </table>
        </div>
    );
};

export default DocumentsTable;
