import React from "react";
import Header from "./Header";
import { ToggleControls } from "./ToggleControls";
import CreditObligations from "./CreditObligations";
import PaymentAmountsChb from "./PaymentAmountsChb";
import PaymentAmountsFlc from "./PaymentAmountsFlc";

function CreditHistory(props) {
    const { creditObligations, header, paymentAmountsChb, paymentAmountsFlc } =
        props;

    const [showExtendedData, setShowExtendedData] = React.useState(false);

    return (
        <div>
            <Header
                loansCount={header.loansCount}
                lastBkiCreationDate={header.lastBkiCreationDate}
            />
            <ToggleControls
                toggleExtendedData={toggleExtendedData}
                toggleCreditHistory={props.toggleCreditHistory}
            />
            <CreditObligations
                cardsAmount={creditObligations.cardsAmount}
                loansAmount={creditObligations.loansAmount}
            />
            <PaymentAmountsChb
                paymentAmountChbTotal={paymentAmountsChb.paymentAmountChbTotal}
                paymentAmountChbRub={paymentAmountsChb.paymentAmountChbTotal}
                paymentAmountChbUsd={paymentAmountsChb.paymentAmountChbTotal}
                paymentAmountChbEur={paymentAmountsChb.paymentAmountChbTotal}
            />
            {showExtendedData && (
                <PaymentAmountsFlc
                    paymentAmountFlcTotal={
                        paymentAmountsFlc.paymentAmountFlcTotal
                    }
                />
            )}
        </div>
    );

    function toggleExtendedData(event) {
        const { target } = event;
        target.innerText = showExtendedData ? "+" : "-";
        setShowExtendedData(!showExtendedData);
    }
}

export { CreditHistory };
