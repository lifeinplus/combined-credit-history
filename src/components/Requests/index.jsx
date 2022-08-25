import { useTranslation } from "react-i18next";

import { Match } from "../../utils";

import { Entry } from "./Entry";
import { Header } from "./Header";

const RequestCounts = (props) => {
    const { t } = useTranslation(["personal_data"]);

    return (
        <ul className="list-unstyled">
            <Header type={props.type} />
            {Match.requestCounts
                .filter((item) => item.type === props.type)
                .map(({ sysName }) => (
                    <Entry
                        key={sysName}
                        name={t(`requests.${sysName}`)}
                        value={props.counts[sysName]}
                    />
                ))}
            {props.type === "all" && (
                <Entry name={t("score")} value={props.score} />
            )}
        </ul>
    );
};

export { RequestCounts };
