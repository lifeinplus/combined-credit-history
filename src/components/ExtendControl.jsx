import { useTranslation } from "react-i18next";

// TODO: Toggle using hotkey
const ExtendControl = (props) => {
    const { t } = useTranslation(["credit_history"]);

    return (
        <div>
            <div className="form-check form-switch navbar-text pb-1">
                <input
                    id="switchExtendedData"
                    className="form-check-input"
                    onClick={props.handleExtend}
                    role="switch"
                    type="checkbox"
                />
                <label
                    className="form-check-label"
                    htmlFor="switchExtendedData"
                >
                    {t("extended_control")}
                </label>
            </div>
        </div>
    );
};

export { ExtendControl };
