import React from "react";
import { Match } from "../../helpers";
import { Header } from "./Header";
import { PaymentAmounts } from "./PaymentAmounts";
import { ToggleControls } from "./ToggleControls";

function CreditHistory(props) {
    const { creditObligations, header, paymentAmountsChb, paymentAmountsFlc } =
        props;

    const [showExtendedData, setShowExtendedData] = React.useState(false);

    const paymentChbAmounts = matchAmounts(
        Match.paymentChbAmounts,
        paymentAmountsChb
    );

    const paymentFlcAmounts = matchAmounts(
        Match.paymentFlcAmounts,
        paymentAmountsFlc
    );

    const paymentObligationAmounts = matchAmounts(
        Match.paymentObligationAmounts,
        creditObligations
    );

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
            <PaymentAmounts amounts={paymentObligationAmounts} />
            <PaymentAmounts amounts={paymentChbAmounts} />
            {showExtendedData && <PaymentAmounts amounts={paymentFlcAmounts} />}
        </div>
    );

    function matchAmounts(matchList, amounts) {
        return matchList.map((item) => ({
            ...item,
            value: amounts[item.sysName],
        }));
    }

    function toggleExtendedData(event) {
        const { target } = event;
        target.innerText = showExtendedData ? "+" : "-";
        setShowExtendedData(!showExtendedData);
    }
}

export { CreditHistory };
