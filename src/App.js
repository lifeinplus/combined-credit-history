import React from "react";
import "./App.css";
import { CreditHistory } from "./components/CreditHistory";
import { PersonalData } from "./components/PersonalData";
import data from "./data/945349.json";

function App() {
    const [expandCreditHistory, setExpandCreditHistory] = React.useState(false);
    const [showExtendedData, setShowExtendedData] = React.useState(false);

    const buttonNames = {
        creditHistory: getButtonName(expandCreditHistory, [
            "Expand",
            "Collapse",
        ]),
        extendedData: getButtonName(showExtendedData, ["+", "-"]),
    };

    return (
        <div className="App">
            {!expandCreditHistory && <PersonalData data={data} />}
            <CreditHistory
                data={data}
                showExtendedData={showExtendedData}
                toggleControls={{
                    creditHistory: {
                        name: buttonNames.creditHistory,
                        onClick: (event) => {
                            const { target } = event;
                            target.innerText = buttonNames.creditHistory;
                            setExpandCreditHistory(!expandCreditHistory);
                        },
                    },
                    extendedData: {
                        name: buttonNames.extendedData,
                        onClick: (event) => {
                            const { target } = event;
                            target.innerText = buttonNames.extendedData;
                            setShowExtendedData(!showExtendedData);
                        },
                    },
                }}
            />
        </div>
    );

    function getButtonName(isFirst, names) {
        return isFirst ? names[1] : names[0];
    }
}

export default App;
