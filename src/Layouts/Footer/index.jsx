import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { useTheme } from "../../hooks/ThemeContext";

const Footer = () => {
    const { t } = useTranslation(["footer"]);
    const theme = useTheme();

    return (
        <footer className={`footer flex-wrap bg-${theme} mt-auto py-2`}>
            <div className="container-fluid d-flex align-items-center">
                <span className="col-5 text-muted">
                    v4.1.0 © 2022—2023 Artem Denisov
                </span>
                <NavLink
                    className="col-2 d-flex justify-content-center"
                    reloadDocument
                    to="/"
                >
                    <img
                        alt="logo_gray"
                        className="f-w-6"
                        src="/logo_gray.png"
                    />
                </NavLink>
                <ul className="col-5 nav justify-content-end">
                    <li className="nav-item">
                        <NavLink className="nav-link px-2 text-muted" to={"/"}>
                            {t("home")}
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            className="nav-link px-2 text-muted"
                            to={"/about"}
                        >
                            {t("about")}
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            className="nav-link px-2 text-muted"
                            to={"/404"}
                        >
                            404
                        </NavLink>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
