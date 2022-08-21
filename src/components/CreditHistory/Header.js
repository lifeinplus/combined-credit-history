import { useTranslation } from "react-i18next";

import { Date } from "../../utils";

const Header = (props) => {
    const { t } = useTranslation(["credit_history"]);
    const { data } = props;

    return (
        <div className="row">
            <div className="col-6">
                <h2>{t("title")}</h2>
            </div>
            <div className="col-6 text-end">
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
