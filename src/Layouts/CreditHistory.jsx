import React from "react";
import { useState } from "react";

import { Header } from "../components/Header";
import { LoansTable } from "../components/LoansTable";
import { PaymentAmounts } from "../components/PaymentAmounts";

function CreditHistory(props) {
    const [showExtendedData, setShowExtendedData] = useState(false);

    const { data } = props;

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
                toggleExtend={toggleExtend}
            />
            <PaymentAmounts data={data} showExtendedData={showExtendedData} />
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
}

export { CreditHistory };
