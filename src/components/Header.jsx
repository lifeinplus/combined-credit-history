import { useTranslation } from "react-i18next";

import { Date } from "../utils";

const Header = (props) => {
    const { t } = useTranslation(props.nameSpaces);

    const { captions, data } = props;
    const { date, number } = data;

    const dateCaption = t(captions.date);
    const numberCaption = t(captions.number);

    return (
        <div className="row g-0">
            <div className="col-6 gy-2 gx-4">
                <h4>{t("title")}</h4>
            </div>
            <div className="col-6 text-end gy-2 gx-4">
                <p>
                    <small>{numberCaption}</small> <strong>{number} </strong>
                    <small>{dateCaption}</small>{" "}
                    <strong>{Date.formatHeader(date)}</strong>
                </p>
            </div>
        </div>
    );
};

export { Header };
