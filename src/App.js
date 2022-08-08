import React from "react";
import "./App.css";
import { CreditHistory } from "./components/CreditHistory";
import { PersonalData } from "./components/PersonalData";
import data from "./data/945349.json";

function App() {
    // TODO: Revert after creating loans table
    // const [expandCreditHistory, setExpandCreditHistory] = React.useState(true);

    const [expandCreditHistory, setExpandCreditHistory] = React.useState(false);
    const [showExtendedData, setShowExtendedData] = React.useState(false);

    const buttonNames = {
        creditHistory: ["Expand", "Collapse"],
        extendedData: ["+", "-"],
    };

    const buttonNameCreditHistory = getButtonName(
        expandCreditHistory,
        buttonNames.creditHistory
    );

    const buttonNameExtendedData = getButtonName(
        showExtendedData,
        buttonNames.extendedData
    );

    return (
        <div className="App">
            {!expandCreditHistory && (
                <PersonalData
                    applicationNumber={data.DOCUMENTNUMBER}
                    creationDate={data.CREATIONDATE}
                    documents={data.personInfo}
                    requestCounts={{
                        ...data.requestsCounts,
                        score: data.ScoringBall,
                    }}
                    requestMicrocreditCounts={data.microcreditRequestsCounts}
                />
            )}
            <CreditHistory
                data={data}
                showExtendedData={showExtendedData}
                toggleControls={{
                    creditHistory: {
                        name: buttonNameCreditHistory,
                        onClick: (event) => {
                            const { target } = event;
                            target.innerText = buttonNameCreditHistory;
                            setExpandCreditHistory(!expandCreditHistory);
                        },
                    },
                    extendedData: {
                        name: buttonNameExtendedData,
                        onClick: (event) => {
                            const { target } = event;
                            target.innerText = buttonNameExtendedData;
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
