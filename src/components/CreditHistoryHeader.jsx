import { useTranslation } from "react-i18next";

import { Date } from "../utils";

const Header = (props) => {
    const { t } = useTranslation(["credit_history"]);
    const { data } = props;
    // TODO: Make it one component
    return (
        <div className="row g-0">
            <div className="col-6 gy-2 gx-4">
                <h4>{t("title")}</h4>
            </div>
            <div className="col-6 text-end gy-2 gx-4">
                <p>
                    <small>{t("number_of_accounts")}</small>
                    <span>{data.loansCount}</span>
                    <small>{t("report_date")}</small>
                    <span>{Date.formatHeader(data.lastBkiCreationDate)}</span>
                </p>
            </div>
        </div>
    );
};

export { Header };
