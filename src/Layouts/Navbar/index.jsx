import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import LanguageButtons from "./components/LanguageButtons";

const Navbar = () => {
    const { t, i18n } = useTranslation(["header"]);

    useEffect(() => {
        document.title = t("title");
    }, [t]);

    return (
        <nav className="navbar bg-light shadow">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img
                        src="logo.png"
                        alt=""
                        width="24"
                        height="24"
                        className="d-inline-block align-text-top"
                    />{" "}
                    {t("title")}
                </a>
                <form className="d-flex">
                    <LanguageButtons i18n={i18n} />
                </form>
            </div>
        </nav>
    );
};

export default Navbar;
