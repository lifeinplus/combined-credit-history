import React from "react";
import { nanoid } from "nanoid";
import { useTranslation } from "react-i18next";

import Header from "../../components/Header";
import Table from "../../components/Table";
import PaymentAmounts from "./components/PaymentAmounts";

import { formatToMonthYear, getDateTimeFormat } from "../../util";
import { TimePeriod, customFields } from "./util";

const CreditHistory = ({ data, handleExtend, showExtendedData }) => {
    const { lastBkiCreationDate, loans, loansCount } = data;

    const { t } = useTranslation(["credit_history"]);
    const dateTimeFormat = getDateTimeFormat();
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
                            <Table
                                columns={columns}
                                data={rows}
                                rowActive={true}
                                rowHover={true}
                                stickyHeader={true}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    function defineColumns() {
        const commonCols = getCommonCols();
        const statusCols = getStatusCols();

        return [...commonCols, ...statusCols];
    }

    function getCommonCols() {
        const all = [...customFields];

        const columns = showExtendedData
            ? all
            : all.filter((column) => !column.extended);

        return columns.map((item) => ({
            ...item,
            name: t(`columns.${item.sysName}`),
            type: "common",
            sortable: true,
        }));
    }

    function getStatusCols() {
        const timePeriod = new TimePeriod(loans, lastBkiCreationDate);

        return timePeriod.result.map((item) => ({
            name: formatToMonthYear(item, dateTimeFormat),
            type: "status",
        }));
    }
};

export default CreditHistory;
