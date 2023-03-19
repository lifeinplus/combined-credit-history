import { Fragment } from "react";
import { langs } from "../../../util";

// TODO - add turkish language
const LanguageButtons = ({ i18n }) => {
    return (
        <div className="btn-group btn-group-sm" role="group">
            {Object.keys(langs).map((lang) => (
                <Fragment key={lang}>
                    <input
                        id={lang}
                        autoComplete="off"
                        checked={i18n.resolvedLanguage === lang}
                        className="btn-check"
                        name="btnradio"
                        onChange={() => i18n.changeLanguage(lang)}
                        type="radio"
                    />
                    <label
                        className="btn btn-outline-primary m-0"
                        htmlFor={lang}
                    >
                        {langs[lang].nativeName}
                    </label>
                </Fragment>
            ))}
        </div>
    );
};

export default LanguageButtons;
