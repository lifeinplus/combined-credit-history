import { useTranslation } from "react-i18next";

import { Match } from "../utils";

const RequestCounts = (props) => {
    const { t } = useTranslation(["personal_data"]);

    const values = Object.values(props.microcreditRequestsCounts);
    const borderDanger = values.some((item) => item) && "border-danger";

    return (
        <div className="card-group">
            <div className="card">
                <div className="card-header text-center">
                    {t("requests.title_all")}
                </div>
                <ListGroup counts={props.requestsCounts} type="all" />
                <div className="card-footer text-center">
                    {t("score")}
                    <span className="badge rounded-pill text-bg-success ms-2">
                        {props.score}
                    </span>
                </div>
            </div>
            <div className={`card ${borderDanger}`}>
                <div className="card-header text-center text-truncate">
                    {t("requests.title_microcredits")}
                </div>
                <ListGroup
                    counts={props.microcreditRequestsCounts}
                    type="micro"
                />
            </div>
        </div>
    );

    function ListGroup(props) {
        return (
            <ul className="list-group list-group-flush">
                {Match.requestCounts
                    .filter((item) => item.type === props.type)
                    .map(({ sysName }) => {
                        return (
                            <ListGroupItem
                                key={sysName}
                                counts={props.counts}
                                sysName={sysName}
                                type={props.type}
                            />
                        );
                    })}
            </ul>
        );
    }

    function ListGroupItem(props) {
        const counts = props.counts[props.sysName];
        const isDanger = props.type === "micro" && counts;

        const itemDanger = isDanger && "list-group-item-danger";
        const badgeBg = isDanger ? "danger" : "primary";

        return (
            <li
                className={`list-group-item d-flex justify-content-between align-items-center ${itemDanger}`}
            >
                {t(`requests.${props.sysName}`)}
                <span className={`badge rounded-pill text-bg-${badgeBg}`}>
                    {counts}
                </span>
            </li>
        );
    }
};

export { RequestCounts };
