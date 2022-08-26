import { Fragment, useEffect } from "react";
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
                    <div className="btn-group btn-group-sm" role="group">
                        {Object.keys(lngs).map((lng) => (
                            <Fragment key={lng}>
                                <input
                                    id={lng}
                                    autoComplete="off"
                                    checked={i18n.resolvedLanguage === lng}
                                    className="btn-check"
                                    name="btnradio"
                                    onChange={() => i18n.changeLanguage(lng)}
                                    type="radio"
                                />
                                <label
                                    className="btn btn-outline-secondary"
                                    htmlFor={lng}
                                >
                                    {lngs[lng].nativeName}
                                </label>
                            </Fragment>
                        ))}
                    </div>
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
