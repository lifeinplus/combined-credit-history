import { Fragment } from "react";
import { lngs } from "../../../util";

// TODO - add turkish language
const LanguageButtons = ({ i18n }) => {
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
                    <label
                        className="btn btn-outline-primary m-0"
                        htmlFor={lng}
                    >
                        {lngs[lng].nativeName}
                    </label>
                </Fragment>
            ))}
        </div>
    );
};

export default LanguageButtons;
