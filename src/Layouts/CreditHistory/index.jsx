import React from "react";
import { nanoid } from "nanoid";
import { useTranslation } from "react-i18next";

import Header from "../../components/Header";
import Table from "../../components/Table";
import PaymentAmounts from "./components/PaymentAmounts";

import { TimePeriod, respectiveColumns } from "./util";

// TODO - make table with sticky head
// TODO - highlight values above zero in delinquency columns
// TODO - highlight the values of the timeliness of payments
const CreditHistory = ({ data, handleExtend, showExtendedData }) => {
    const { lastBkiCreationDate, loans, loansCount } = data;

    const { t } = useTranslation(["credit_history"]);

    const columns = defineColumns();

    const rows = React.useMemo(() => {
        return loans.map((item) => ({ ...item, id: nanoid() }));
    }, [loans]);

    return (
        <div className="container-fluid mb-3">
            <div className="row panel border rounded">
                <div className="col">
                    <div className="row">
                        <Header
                            captions={{
                                date: "report_date",
                                number: "number_of_accounts",
                            }}
                            data={{
                                date: lastBkiCreationDate,
                                number: loansCount,
                            }}
                            handleExtend={handleExtend}
                            iconName={"bi-credit-card-2-front"}
                            nameSpaces={["credit_history"]}
                            showExtendedData={showExtendedData}
                        />
                    </div>
                    <PaymentAmounts
                        data={data}
                        showExtendedData={showExtendedData}
                    />
                    <div className="row">
                        <div className="col">
                            <Table columns={columns} data={rows} hover={true} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    function defineColumns() {
        const commonCols = getCommonCols();
        const dateCols = getDateCols();

        return [...commonCols, ...dateCols];
    }

    function getCommonCols() {
        const all = [...respectiveColumns];

        const columns = showExtendedData
            ? all
            : all.filter((column) => !column.extended);

        return columns.map((item) => ({
            ...item,
            isCommon: true,
            name: t(`columns.${item.sysName}`),
            sortable: true,
        }));
    }

    function getDateCols() {
        const timePeriod = new TimePeriod(loans, lastBkiCreationDate);

        return timePeriod.result.map((item) => ({
            name: item,
            type: "status",
        }));
    }
};

export default CreditHistory;
