import { useTranslation } from "react-i18next";

import { Date } from "../utils";

const Header = (props) => {
    const { captions, data } = props;
    const { t } = useTranslation(props.nameSpaces);

    return (
        <div className="row g-0">
            <div className="col-6 gy-2 gx-4">
                <h4>{t("title")}</h4>
            </div>
            <div className="col-6 text-end gy-2 gx-4">
                <p>
                    <small>{t(captions.number)}</small>
                    <span>{data.number}</span>
                    <small>{t(captions.date)}</small>
                    <span>{Date.formatHeader(data.date)}</span>
                </p>
            </div>
        </div>
    );
};

export { Header };
