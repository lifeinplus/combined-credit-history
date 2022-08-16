import { nanoid } from "nanoid";
import { useTranslation } from "react-i18next";

const TableHead = () => {
    const { t } = useTranslation(["personal_data"]);

    const ths = [
        "source",
        "full_name",
        "birth_date",
        "passport_series",
        "passport_number",
        "issue_date",
    ].map((item) => <th key={nanoid()}>{t(`document.${item}`)}</th>);

    return (
        <thead>
            <tr>{ths}</tr>
        </thead>
    );
};

export { TableHead };
