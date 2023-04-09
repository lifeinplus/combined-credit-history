import { useTranslation } from "react-i18next";
import { customFields, scoreStyles } from "./util";
import { joinClasses } from "../../../../util";

const RequestCounts = ({ counts, score, theme }) => {
    const { t } = useTranslation(["personal_data"]);

    return (
        <div className="card-group">
            <Card
                counts={counts}
                score={score}
                title={t("requests.title_all")}
                type={"all"}
            />
            <Card
                counts={counts}
                title={t("requests.title_microcredits")}
                type={"micro"}
            />
        </div>
    );

    function Card({ counts, score, title, type }) {
        const fields = customFields.filter((item) => item.type === type);
        const values = fields.map((item) => counts[item.sysName]);

        const scoreDanger = score < 500;
        const microDanger = type === "micro" && values.some((item) => item);

        return (
            <div
                className={joinClasses([
                    "card",
                    `cch-text-bg-${theme}`,
                    theme === "dark" && "cch-card-border-dark",
                    (scoreDanger || microDanger) && "border-danger",
                ])}
            >
                <div
                    className={joinClasses([
                        "card-header text-center text-truncate",
                        theme === "dark" && "cch-border-dark",
                    ])}
                >
                    {title}
                </div>
                <ul className="list-group list-group-flush">
                    {fields.map(({ sysName }) => {
                        return (
                            <Item
                                key={sysName}
                                count={counts[sysName]}
                                sysName={sysName}
                                type={type}
                            />
                        );
                    })}
                </ul>
                {score && <Footer value={score} />}
            </div>
        );
    }

    function Item({ count, sysName, type }) {
        const isDanger = type === "micro" && count > 0;

        return (
            <li
                className={joinClasses([
                    "list-group-item",
                    `cch-list-group-item-${theme}`,
                    "d-flex",
                    "justify-content-between",
                    "align-items-center",
                ])}
            >
                <span className="text-truncate">
                    {t(`requests.${sysName}`)}
                </span>
                <span
                    className={joinClasses([
                        "badge",
                        "rounded-pill",
                        isDanger ? "text-bg-danger" : `text-bg-${theme}`,
                        "ms-2",
                    ])}
                >
                    {count}
                </span>
            </li>
        );
    }

    function Footer({ value }) {
        const { style: scoreStyle } = scoreStyles.find(({ min, max }) => {
            return value >= min && value <= max;
        });

        return (
            <div className="card-footer text-center">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    <span className="text-truncate">{t("score")}</span>
                    <span className={`badge rounded-pill ${scoreStyle} ms-2`}>
                        {value}
                    </span>
                </li>
            </div>
        );
    }
};

export default RequestCounts;
