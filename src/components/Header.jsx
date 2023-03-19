import { useTranslation } from "react-i18next";
import ExtendControl from "./ExtendControl";
import { getDateTimeFormat, langs } from "../util";

const Header = ({
    date,
    handleExtend,
    iconName,
    nameSpaces,
    number,
    showExtendedData,
}) => {
    const { i18n, t } = useTranslation(nameSpaces);
    const lang = langs[i18n.resolvedLanguage];

    const milliseconds = Date.parse(date.value);
    const headerFormat = getDateTimeFormat(lang.locale, "header");
    const headerDate = headerFormat.format(milliseconds);

    return (
        <nav className="navbar navbar-light">
            <div className="container-fluid">
                <span className="navbar-brand" href="#">
                    <i className={`bi ${iconName} me-2`}></i>
                    {t("title")}
                </span>
                {handleExtend && (
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <ExtendControl
                                handleExtend={handleExtend}
                                showExtendedData={showExtendedData}
                            />
                        </li>
                    </ul>
                )}
                <form className="d-flex">
                    <span className="navbar-text">
                        <HeaderValue
                            caption={number.caption}
                            value={number.value}
                        />
                        <HeaderValue
                            caption={date.caption}
                            value={headerDate}
                        />
                    </span>
                </form>
            </div>
        </nav>
    );

    function HeaderValue({ caption, value }) {
        return (
            <>
                <small className="px-2">{t(caption)}</small>
                <div className="d-inline text-body user-select-all">
                    {value}
                </div>
            </>
        );
    }
};

export default Header;
