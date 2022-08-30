import { useTranslation } from "react-i18next";

import { Date } from "../utils";

import { ExtendedControl } from "./ExtendedControl";

const Header = (props) => {
    const { t } = useTranslation(props.nameSpaces);

    const { captions, data } = props;
    const { date, number } = data;

    const dateCaption = t(captions.date);
    const numberCaption = t(captions.number);

    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <span className="navbar-brand" href="#">
                    {t("title")}
                </span>
                {props.toggleExtend && (
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <ExtendedControl
                                toggleExtend={props.toggleExtend}
                            />
                        </li>
                    </ul>
                )}
                <form className="d-flex">
                    <span className="navbar-text">
                        <small>{numberCaption}</small>{" "}
                        <strong>{number} </strong>
                        <small>{dateCaption}</small>{" "}
                        <strong>{Date.formatHeader(date)}</strong>
                    </span>
                </form>
            </div>
        </nav>
    );
};

export { Header };
