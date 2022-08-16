import { useState } from "react";
import { useTranslation } from "react-i18next";

import "./App.css";

import { CreditHistory } from "./components/CreditHistory";
import { PersonalData } from "./components/PersonalData";
import { Header } from "./components/Header";

import data from "./data/945349.json";

function App() {
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
        <div className="App">
            <Header />
            {!expandCreditHistory && <PersonalData data={data} />}
            <CreditHistory
                data={data}
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
}

export default App;
