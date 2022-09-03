import { Fragment } from "react";
import { useTranslation } from "react-i18next";

import { Date } from "../utils";

import { ExtendedControl } from "./ExtendedControl";

const Header = (props) => {
    const { t } = useTranslation(props.nameSpaces);
    const { captions, data } = props;

    return (
        <nav className="navbar navbar-light mt-3">
            <div className="container-fluid">
                <span className="navbar-brand" href="#">
                    <i className={`bi ${props.iconName} me-2`}></i>
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
                        <HeaderValue
                            caption={captions.number}
                            value={data.number}
                        />
                        <HeaderValue
                            caption={captions.date}
                            value={Date.formatHeader(data.date)}
                        />
                    </span>
                </form>
            </div>
        </nav>
    );

    function HeaderValue(props) {
        return (
            <Fragment>
                <small>{t(props.caption)}</small>
                <div className="d-inline px-2 text-body user-select-all">
                    {props.value}
                </div>
            </Fragment>
        );
    }
};

export { Header };
