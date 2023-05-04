import { useTranslation } from "react-i18next";
import { useTheme } from "../hooks/ThemeContext";
import { getDateFormat, langs } from "../util";
import ExtendControl from "./ExtendControl";

const Header = ({
    date,
    handleExtend,
    iconName,
    nameSpaces,
    number,
    showExtendedData,
}) => {
    const { i18n, t } = useTranslation(nameSpaces);
    const theme = useTheme();

    const headerDate = getHeaderDate(date?.value);

    return (
        <nav className={`navbar navbar-${theme}`}>
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
                {headerDate && (
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
                )}
            </div>
        </nav>
    );

    function HeaderValue({ caption, value }) {
        return (
            <>
                <small className="px-2">{t(caption)}</small>
                <div className={`d-inline cch-navbar-text user-select-all`}>
                    {value}
                </div>
            </>
        );
    }

    function getHeaderDate(value) {
        if (!value) return;

        const lang = langs[i18n.resolvedLanguage];
        const dateFormat = getDateFormat(lang.locale, "header");
        const milliseconds = Date.parse(value);

        return dateFormat.format(milliseconds);
    }
};

export default Header;
