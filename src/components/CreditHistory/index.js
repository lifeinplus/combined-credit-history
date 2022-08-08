import React from "react";
import { Match } from "../../helpers";
import { Header } from "./Header";
import { PaymentAmounts } from "./PaymentAmounts";
import { ToggleControls } from "./ToggleControls";

function CreditHistory(props) {
    const { data } = props;

    const amounts = {
        chb: defineAmounts(Match.paymentAmounts, data, "CHB"),
        flc: defineAmounts(Match.paymentAmounts, data, "FLC"),
        obligation: defineAmounts(Match.paymentAmounts, data, "obligation"),
    };

    return (
        <div>
            <Header data={data} />
            <ToggleControls controls={props.toggleControls} />
            <PaymentAmounts amounts={amounts.obligation} />
            <PaymentAmounts amounts={amounts.chb} />
            {props.showExtendedData && <PaymentAmounts amounts={amounts.flc} />}
        </div>
    );

    function defineAmounts(matchList, data, type) {
        return matchList
            .filter((item) => item.type === type)
            .map((item) => ({
                ...item,
                value: data[item.sysName],
            }));
    }
}

export { CreditHistory };
