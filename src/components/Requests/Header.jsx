import { useTranslation } from "react-i18next";

const Header = (props) => {
    const { t } = useTranslation(["personal_data"]);

    return (
        <li>
            <span>
                {props.type === "all"
                    ? t("requests.title_all")
                    : t("requests.title_microcredits")}
            </span>
        </li>
    );
};

export { Header };
