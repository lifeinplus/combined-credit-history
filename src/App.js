import React from "react";
import "./App.css";
import { CreditHistory } from "./components/CreditHistory";
import { PersonalData } from "./components/PersonalData";
import data from "./data/945349.json";

function App() {
    const [expandCreditHistory, setExpandCreditHistory] = React.useState(false);

    return (
        <div className="App">
            {!expandCreditHistory && (
                <PersonalData
                    applicationNumber={data.DOCUMENTNUMBER}
                    creationDate={data.CREATIONDATE}
                    documents={data.personInfo}
                    requestsCounts={{
                        ...data.requestsCounts,
                        score: data.ScoringBall,
                    }}
                    requestsMicrocreditCounts={data.microcreditRequestsCounts}
                />
            )}
            <CreditHistory
                creditObligations={{
                    cardsAmount: data.bkiCreditCardsAmount,
                    loansAmount: data.bkiLoansAmount,
                }}
                header={{
                    loansCount: data.loansCount,
                    lastBkiCreationDate: data.lastBkiCreationDate,
                }}
                paymentAmountsChb={{
                    paymentAmountChbTotal: data.bkiPaymentsAmountTotal,
                    paymentAmountChbRub: data.bkiPaymentsAmountRub,
                    paymentAmountChbUsd: data.bkiPaymentsAmountUsd,
                    paymentAmountChbEur: data.bkiPaymentsAmount,
                }}
                paymentAmountsFlc={{
                    paymentAmountFlcTotal: data.pskPaymentsAmountTotal,
                }}
                toggleCreditHistory={toggleCreditHistory}
            />
        </div>
    );

    function toggleCreditHistory(event) {
        const { target } = event;
        target.innerText = expandCreditHistory ? "Expand" : "Collapse";
        setExpandCreditHistory(!expandCreditHistory);
    }
}

export default App;
