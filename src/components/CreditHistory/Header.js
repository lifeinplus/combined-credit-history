import { useTranslation } from "react-i18next";

import { Date } from "../../utils";

const Header = (props) => {
    const { t } = useTranslation(["credit_history"]);
    const { data } = props;

    return (
        <div>
            <h2>{t("title")}</h2>
            <p>
                <small>{t("number_of_accounts")}</small>
                <span>{data.loansCount}</span>
                <small>{t("report_date")}</small>
                <span>{Date.formatHeader(data.lastBkiCreationDate)}</span>
            </p>
        </div>
    );
};

export { Header };
