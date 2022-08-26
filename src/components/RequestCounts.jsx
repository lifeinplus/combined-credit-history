import { useTranslation } from "react-i18next";

import { Match } from "../utils";

const RequestCounts = (props) => {
    const { t } = useTranslation(["personal_data"]);

    return (
        <div className="card-group">
            <div className="card">
                <div className="card-header">{t("requests.title_all")}</div>
                <ListGroup counts={props.requestsCounts} type="all" />
                <div className="card-footer">{`${t("score")}: ${
                    props.score
                }`}</div>
            </div>
            <div className="card border-danger">
                <div className="card-header">
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
                    .map(({ sysName }) => (
                        <li key={sysName} className="list-group-item">
                            {`${t(`requests.${sysName}`)}: ${
                                props.counts[sysName]
                            }`}
                        </li>
                    ))}
            </ul>
        );
    }
};

export { RequestCounts };
