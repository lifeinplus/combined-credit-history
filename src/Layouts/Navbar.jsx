import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const lngs = {
    en: { nativeName: "English" },
    ru: { nativeName: "Русский" },
};

const Navbar = () => {
    const { t, i18n } = useTranslation(["header"]);

    document.onkeydown = (event) => {
        if (event.altKey && event.code === "KeyL") {
            changeLanguage();
        }
    };

    useEffect(() => {
        document.title = t("title");
    }, [t]);

    return (
        <nav className="navbar bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    {t("title")}
                </a>
                <form className="d-flex">
                    {Object.keys(lngs).map((lng) => (
                        <button
                            className="btn btn-sm me-1"
                            key={lng}
                            disabled={i18n.resolvedLanguage === lng}
                            onClick={() => i18n.changeLanguage(lng)}
                            type={"submit"}
                        >
                            {lngs[lng].nativeName}
                        </button>
                    ))}
                </form>
            </div>
        </nav>
    );

    function changeLanguage() {
        const lng = Object.keys(lngs).filter(
            (lng) => lng !== i18n.resolvedLanguage
        );

        i18n.changeLanguage(lng);
    }
};

export { Navbar };
