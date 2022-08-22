import { useTranslation } from "react-i18next";

import { Date } from "../utils";

const Header = (props) => {
    const { data } = props;
    const { t } = useTranslation(["personal_data"]);
    // TODO: Make it one component
    return (
        <div className="row g-0">
            <div className="col-6 gy-2 gx-4">
                <h4>{t("title")}</h4>
            </div>
            <div className="col-6 text-end gy-2 gx-4">
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

export { Header };
