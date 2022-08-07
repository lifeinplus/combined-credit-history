import React from "react";
import Header from "./Header";
import { ToggleControls } from "./ToggleControls";
import CreditObligations from "./CreditObligations";
import PaymentAmounts from "./PaymentAmounts";
import { Match } from "../../helpers";

function CreditHistory(props) {
    const { creditObligations, header, paymentAmountsChb, paymentAmountsFlc } =
        props;

    const [showExtendedData, setShowExtendedData] = React.useState(false);

    const paymentChbList = Match.paymentChbNames.map((item) => ({
        ...item,
        value: paymentAmountsChb[item.sysName],
    }));

    const paymentFlcList = Match.paymentFlcNames.map((item) => ({
        ...item,
        value: paymentAmountsFlc[item.sysName],
    }));

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
            <PaymentAmounts list={paymentChbList} />
            {showExtendedData && <PaymentAmounts list={paymentFlcList} />}
        </div>
    );

    function toggleExtendedData(event) {
        const { target } = event;
        target.innerText = showExtendedData ? "+" : "-";
        setShowExtendedData(!showExtendedData);
    }
}

export { CreditHistory };
