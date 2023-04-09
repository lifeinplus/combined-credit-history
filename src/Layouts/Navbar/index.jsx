import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

import LanguageButtons from "./components/LanguageButtons";

import { joinClasses } from "../../util";

const Navbar = ({ theme, toggleTheme }) => {
    const { t, i18n } = useTranslation(["header"]);

    useEffect(() => {
        document.title = t("title");
    }, [t]);

    return (
        <nav
            className={joinClasses([
                "navbar",
                `navbar-${theme}`,
                "navbar-expand-md",
                `bg-${theme}`,
                theme === "light" ? "shadow" : "cch-shadow-dark",
            ])}
        >
            <div className="container-fluid">
                <NavLink
                    className="navbar-brand d-flex align-items-center me-10"
                    reloadDocument
                    to="/"
                >
                    <span className="f-w-5 d-block me-2">
                        <img
                            alt="logo"
                            className="w-100 align-text-top"
                            src="logo.png"
                        />
                    </span>
                    <span>{t("title")}</span>
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse justify-content-end"
                    id="navbarSupportedContent"
                >
                    <form className="d-flex">
                        <div className="form-check form-switch me-2 mt-1">
                            <input
                                id="toggleTheme"
                                checked={theme === "dark"}
                                className="form-check-input"
                                onChange={toggleTheme}
                                role="switch"
                                type="checkbox"
                            />
                        </div>
                        <LanguageButtons i18n={i18n} theme={theme} />
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
