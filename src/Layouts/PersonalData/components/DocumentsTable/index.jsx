import { nanoid } from "nanoid";
import { useTranslation } from "react-i18next";

import { respectiveColumns } from "../../util";

import TableBody from "./components/TableBody";
import TableHead from "./components/TableHead";

const DocumentsTable = ({ data }) => {
    const { t } = useTranslation(["personal_data"]);

    const columns = respectiveColumns.map((item) => ({
        ...item,
        name: t(`document.${item.sysName}`),
    }));

    const documents = data.personInfo.map((item) => ({
        ...item,
        id: nanoid(),
    }));

    return (
        <div className="table-responsive border rounded mb-3 mb-lg-0">
            <table className="table table-striped align-middle mb-0">
                <TableHead columns={columns} />
                <TableBody columns={columns} data={documents} />
            </table>
        </div>
    );
};

export default DocumentsTable;
