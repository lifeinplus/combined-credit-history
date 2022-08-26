import React from "react";
import { useState } from "react";

import { Match } from "../utils";

import { ExtendedControl } from "../components/ExtendedControl";
import { Header } from "../components/Header";
import { LoansTable } from "../components/LoansTable";
import { PaymentAmounts } from "../components/PaymentAmounts";

function CreditHistory(props) {
    const [showExtendedData, setShowExtendedData] = useState(false);

    const { data } = props;

    const amounts = {
        chb: defineAmounts(Match.paymentAmounts, data, "CHB"),
        flc: defineAmounts(Match.paymentAmounts, data, "FLC"),
        obligation: defineAmounts(Match.paymentAmounts, data, "obligation"),
    };

    function toggleExtend() {
        setShowExtendedData(!showExtendedData);
    }

    return (
        <div className="row">
            <Header
                captions={{
                    date: "report_date",
                    number: "number_of_accounts",
                }}
                data={{
                    date: data.lastBkiCreationDate,
                    number: data.loansCount,
                }}
                nameSpaces={["credit_history"]}
            />
            <div className="row justify-content-between">
                <div className="col-2">
                    <ExtendedControl toggleExtend={toggleExtend} />
                </div>
                <div className="col-4">
                    <PaymentAmounts amounts={amounts.obligation} />
                </div>
                <div className="col-4">
                    <PaymentAmounts amounts={amounts.chb} />
                </div>
                {showExtendedData && (
                    <div className="col-2">
                        <PaymentAmounts amounts={amounts.flc} />
                    </div>
                )}
            </div>
            <div className="row">
                <div className="col">
                    <LoansTable
                        lastBkiCreationDate={data.lastBkiCreationDate}
                        loans={data.loans}
                        showExtendedData={showExtendedData}
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
