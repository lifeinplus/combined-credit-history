import { useTranslation } from "react-i18next";

import { joinClasses } from "../../../../util";
import { respectiveRequestCounts } from "./util";

const RequestCounts = ({
    microcreditRequestsCounts,
    requestsCounts,
    score,
}) => {
    const { t } = useTranslation(["personal_data"]);

    const values = Object.values(microcreditRequestsCounts);
    const borderDanger = values.some((item) => item) && "border-danger";

    return (
        <div className="card-group">
            <div className="card">
                <div className="card-header text-center">
                    {t("requests.title_all")}
                </div>
                <ListGroup counts={requestsCounts} type="all" />
                <div className="card-footer text-center">
                    {t("score")}
                    <span className="badge rounded-pill text-bg-success ms-2">
                        {score}
                    </span>
                </div>
            </div>
            <div className={`card ${borderDanger}`}>
                <div className="card-header text-center text-truncate">
                    {t("requests.title_microcredits")}
                </div>
                <ListGroup counts={microcreditRequestsCounts} type="micro" />
            </div>
        </div>
    );

    function ListGroup({ counts, type }) {
        return (
            <ul className="list-group list-group-flush">
                {respectiveRequestCounts
                    .filter((item) => item.type === type)
                    .map(({ sysName }) => {
                        return (
                            <ListGroupItem
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

    function ListGroupItem({ count, sysName, type }) {
        const isDanger = !!(type === "micro" && count);

        const itemDangerClass = isDanger ? "list-group-item-danger" : "";
        const badgeBg = isDanger ? "text-bg-danger" : "text-bg-light";

        const lgiClassName = joinClasses([
            "list-group-item",
            "d-flex",
            "justify-content-between",
            "align-items-center",
            itemDangerClass,
        ]);

        const badgeClassName = joinClasses(["badge", "rounded-pill", badgeBg]);

        return (
            <li className={lgiClassName}>
                {t(`requests.${sysName}`)}
                <span className={badgeClassName}>{count}</span>
            </li>
        );
    }
};

export default RequestCounts;
