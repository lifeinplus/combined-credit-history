import { useTranslation } from "react-i18next";

import { Date } from "../../utils";

const Header = (props) => {
    const { data } = props;
    const { t } = useTranslation(["personal_data"]);

    return (
        <div className="row">
            <div className="col-6">
                <h2>{t("title")}</h2>
            </div>
            <div className="col-6 text-end">
                <p>
                    <small>{t("app_number")}</small>
                    <span>{data.DOCUMENTNUMBER}</span>
                    <small>{t("app_creation_date")}</small>
                    <span>{Date.formatHeader(data.CREATIONDATE)}</span>
                </p>
            </div>
        </div>
    );
};

export default Header;
