import { useTranslation } from "react-i18next";
import { respectiveColumns } from "../../../util";

const TableHead = () => {
    const { t } = useTranslation(["personal_data"]);

    return (
        <thead className="align-middle">
            <tr className="table-primary">
                {respectiveColumns.map((item) => (
                    <th key={item.sysName} scope="col">
                        {t(`document.${item.sysName}`)}
                    </th>
                ))}
            </tr>
        </thead>
    );
};

export default TableHead;
