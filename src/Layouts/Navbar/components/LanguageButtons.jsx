import { Fragment } from "react";

const lngs = {
    en: { nativeName: "English" },
    ru: { nativeName: "Русский" },
};

const LanguageButtons = ({ i18n }) => {
    document.onkeydown = (event) => {
        if (event.altKey && event.code === "KeyL") {
            changeLanguage();
        }
    };

    return (
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
                    <label className="btn btn-outline-primary" htmlFor={lng}>
                        {lngs[lng].nativeName}
                    </label>
                </Fragment>
            ))}
        </div>
    );

    function changeLanguage() {
        const lng = Object.keys(lngs).filter(
            (lng) => lng !== i18n.resolvedLanguage
        );

        i18n.changeLanguage(lng);
    }
};

export default LanguageButtons;
