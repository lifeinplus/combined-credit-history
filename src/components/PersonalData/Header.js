import { useTranslation } from "react-i18next";

import { Date } from "../../utils";

const Header = (props) => {
    const { data } = props;
    const { t } = useTranslation(["personal_data"]);

    return (
        <div>
            <h2>{t("title")}</h2>
            <p>
                <small>{t("app_number")}</small>
                <span>{data.DOCUMENTNUMBER}</span>
                <small>{t("app_creation_date")}</small>
                <span>{Date.formatHeader(data.CREATIONDATE)}</span>
            </p>
        </div>
    );
};

export default Header;
