import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import LanguageButtons from "./components/LanguageButtons";

const Navbar = () => {
    const { t, i18n } = useTranslation(["header"]);

    useEffect(() => {
        document.title = t("title");
    }, [t]);

    return (
        <nav className="navbar navbar-expand-md bg-light shadow">
            <div className="container-fluid">
                <a
                    className="navbar-brand d-flex align-items-center me-10"
                    href="#"
                >
                    <span className="f-w-5 d-block me-2">
                        <img
                            alt=""
                            className="w-100 align-text-top"
                            src="logo.png"
                        />
                    </span>
                    <span>{t("title")}</span>
                </a>
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
                        <LanguageButtons i18n={i18n} />
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
