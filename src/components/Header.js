import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const lngs = {
    en: { nativeName: "English" },
    ru: { nativeName: "Русский" },
};

const Header = () => {
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
        <div>
            <h1>{t("title")}</h1>
            <div>
                {Object.keys(lngs).map((lng) => (
                    <button
                        key={lng}
                        disabled={i18n.resolvedLanguage === lng}
                        onClick={() => i18n.changeLanguage(lng)}
                        type={"submit"}
                    >
                        {lngs[lng].nativeName}
                    </button>
                ))}
            </div>
        </div>
    );

    function changeLanguage() {
        const lng = Object.keys(lngs).filter(
            (lng) => lng !== i18n.resolvedLanguage
        );

        i18n.changeLanguage(lng);
    }
};

export { Header };
