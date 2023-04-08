import { useTranslation } from "react-i18next";

import { customFields } from "./util";
import { joinClasses } from "../../../../util";

const RequestCounts = ({ counts, score }) => {
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

        const borderDanger =
            type === "micro" && values.some((item) => item) && "border-danger";

        return (
            <div className={joinClasses(["card", borderDanger])}>
                <div className="card-header text-center text-truncate">
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

        const itemClasses = joinClasses([
            "list-group-item",
            isDanger && "list-group-item-danger",
            "d-flex",
            "justify-content-between",
            "align-items-center",
        ]);

        const badgeClasses = joinClasses([
            "badge",
            "rounded-pill",
            isDanger ? "text-bg-danger" : "text-bg-light",
            "ms-2",
        ]);

        return (
            <li className={itemClasses}>
                <span className="text-truncate">
                    {t(`requests.${sysName}`)}
                </span>
                <span className={badgeClasses}>{count}</span>
            </li>
        );
    }

    function Footer({ value }) {
        return (
            <div className="card-footer text-center">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    <span className="text-truncate">{t("score")}</span>
                    <span className="badge rounded-pill text-bg-success ms-2">
                        {value}
                    </span>
                </li>
            </div>
        );
    }
};

export default RequestCounts;
