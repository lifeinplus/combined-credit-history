import React from "react";
import { useState } from "react";

import { TimePeriod, respectiveColumns } from "./util";

import { Header } from "../../components/Header";
import { LoansTable } from "./components/LoansTable";
import { PaymentAmounts } from "./components/PaymentAmounts";

function CreditHistory(props) {
    const [showExtendedData, setShowExtendedData] = useState(false);

    const { data } = props;

    const columns = defineColumns();

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
                iconName={"bi-credit-card-2-front"}
                nameSpaces={["credit_history"]}
                toggleExtend={toggleExtend}
            />
            <PaymentAmounts data={data} showExtendedData={showExtendedData} />
            <LoansTable columns={columns} data={data.loans} />
        </div>
    );

    function defineColumns() {
        const result = respectiveColumns.filter(
            (item) => !item.extended || (item.extended && showExtendedData)
        );

        const timePeriod = new TimePeriod(data.loans);
        const textMonths = timePeriod.getTextMonths(data.lastBkiCreationDate);

        textMonths.forEach((item) => result.push({ name: item, status: true }));

        return result;
    }
}

export { CreditHistory };
