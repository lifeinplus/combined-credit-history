import { useTranslation } from "react-i18next";
import { formatHeader } from "../util";
import ExtendControl from "./ExtendControl";

const Header = ({ captions, data, handleExtend, iconName, nameSpaces }) => {
    const { t } = useTranslation(nameSpaces);

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
                            <ExtendControl handleExtend={handleExtend} />
                        </li>
                    </ul>
                )}
                <form className="d-flex">
                    <span className="navbar-text">
                        <HeaderValue
                            caption={captions.number}
                            value={data.number}
                        />
                        <HeaderValue
                            caption={captions.date}
                            value={formatHeader(data.date)}
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
