import React from "react";

import { Match } from "../utils";

import { Header } from "../components/CreditHistoryHeader";
import { LoansTable } from "../components/LoansTable";
import { PaymentAmounts } from "../components/PaymentAmounts";
import { ToggleControls } from "../components/ToggleControls";

function CreditHistory(props) {
    const { data } = props;

    const amounts = {
        chb: defineAmounts(Match.paymentAmounts, data, "CHB"),
        flc: defineAmounts(Match.paymentAmounts, data, "FLC"),
        obligation: defineAmounts(Match.paymentAmounts, data, "obligation"),
    };

    return (
        <div className="row">
            <Header data={data} />
            <div className="row justify-content-between">
                <div className="col-2">
                    <ToggleControls controls={props.toggleControls} />
                </div>
                <div className="col-3">
                    <PaymentAmounts amounts={amounts.obligation} />
                </div>
                <div className="col-3">
                    <PaymentAmounts amounts={amounts.chb} />
                </div>
                {props.showExtendedData && (
                    <div className="col-3">
                        <PaymentAmounts amounts={amounts.flc} />
                    </div>
                )}
            </div>
            <div className="row">
                <div className="col">
                    <LoansTable
                        lastBkiCreationDate={data.lastBkiCreationDate}
                        loans={data.loans}
                        showExtendedData={props.showExtendedData}
                    />
                </div>
            </div>
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
