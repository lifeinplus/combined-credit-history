import { nanoid } from "nanoid";
import { useTranslation } from "react-i18next";

// TODO: Refactor
const TableHead = () => {
    const { t } = useTranslation(["personal_data"]);

    const ths = [
        "source",
        "full_name",
        "birth_date",
        "passport_series",
        "passport_number",
        "issue_date",
    ].map((item) => (
        <th key={nanoid()} scope="col">
            {t(`document.${item}`)}
        </th>
    ));

    return (
        <thead className="align-middle">
            <tr className="table-primary">{ths}</tr>
        </thead>
    );
};

export default TableHead;
