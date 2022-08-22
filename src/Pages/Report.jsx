import { useState } from "react";
import { useTranslation } from "react-i18next";

import { CreditHistory, PersonalData } from "../Layouts";

const Report = (props) => {
    const { t } = useTranslation(["credit_history"]);

    const [expandCreditHistory, setExpandCreditHistory] = useState(false);
    const [showExtendedData, setShowExtendedData] = useState(false);

    const controlNames = {
        creditHistory: getControlName(expandCreditHistory, [
            t("controls.expand"),
            t("controls.collapse"),
        ]),
        extendedData: getControlName(showExtendedData, ["+", "-"]),
    };

    return (
        <div className="container-fluid">
            {!expandCreditHistory && <PersonalData data={props.data} />}
            <CreditHistory
                data={props.data}
                showExtendedData={showExtendedData}
                toggleControls={{
                    creditHistory: {
                        name: controlNames.creditHistory,
                        onClick: (event) => {
                            const { target } = event;
                            target.innerText = controlNames.creditHistory;
                            setExpandCreditHistory(!expandCreditHistory);
                        },
                    },
                    extendedData: {
                        name: controlNames.extendedData,
                        onClick: (event) => {
                            const { target } = event;
                            target.innerText = controlNames.extendedData;
                            setShowExtendedData(!showExtendedData);
                        },
                    },
                }}
            />
        </div>
    );

    function getControlName(isFirst, names) {
        return isFirst ? names[1] : names[0];
    }
};

export { Report };
