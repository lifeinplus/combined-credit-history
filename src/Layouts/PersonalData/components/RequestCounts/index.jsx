import { useTranslation } from "react-i18next";

import { customFields } from "./util";
import { joinClasses } from "../../../../util";

const RequestCounts = ({
    microcreditRequestsCounts,
    requestsCounts,
    score,
}) => {
    const { t } = useTranslation(["personal_data"]);

    return (
        <div className="card-group">
            <Card
                counts={requestsCounts}
                score={score}
                title={t("requests.title_all")}
                type={"all"}
            />
            <Card
                counts={microcreditRequestsCounts}
                title={t("requests.title_microcredits")}
                type={"micro"}
            />
        </div>
    );

    function Card({ counts, score, title, type }) {
        const values = Object.values(counts);
        const borderDanger =
            type === "micro" && values.some((item) => item) && "border-danger";

        return (
            <div className={joinClasses(["card", borderDanger])}>
                <div className="card-header text-center text-truncate">
                    {title}
                </div>
                <Group counts={counts} type={type} />
                {score && <Footer value={score} />}
            </div>
        );
    }

    function Group({ counts, type }) {
        return (
            <ul className="list-group list-group-flush">
                {customFields
                    .filter((field) => field.type === type)
                    .map(({ sysName }) => {
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
