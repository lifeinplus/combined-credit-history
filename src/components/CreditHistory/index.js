import React from "react";

import { Match } from "../../utils";

import { Header } from "./Header";
import { LoansTable } from "./LoansTable";
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
            <LoansTable
                lastBkiCreationDate={data.lastBkiCreationDate}
                loans={data.loans}
                showExtendedData={props.showExtendedData}
            />
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
