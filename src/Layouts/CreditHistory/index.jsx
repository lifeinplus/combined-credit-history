import { useTranslation } from "react-i18next";

import Header from "../../components/Header";
import Table from "../../components/Table";
import PaymentAmounts from "./components/PaymentAmounts";

import { getDateTimeFormat } from "../../util";
import { TimePeriod, customFields } from "./util";

const CreditHistory = ({ data, handleExtend, showExtendedData }) => {
    const { lastBkiCreationDate, loans, loansCount } = data;

    const { t } = useTranslation(["credit_history"]);
    const statusFormat = getDateTimeFormat("ru", "tableStatus");
    const columns = defineColumns();

    return (
        <div className="container-fluid mb-3">
            <div className="row panel border rounded">
                <div className="col">
                    <div className="row">
                        <Header
                            date={{
                                caption: "report_date",
                                value: lastBkiCreationDate,
                            }}
                            handleExtend={handleExtend}
                            iconName={"bi-credit-card-2-front"}
                            nameSpaces={["credit_history"]}
                            number={{
                                caption: "number_of_accounts",
                                value: loansCount,
                            }}
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
                                id={"ch"}
                                columns={columns}
                                data={loans}
                                rowActive={true}
                                rowHover={true}
                                stickyHeader={true}
                                tooltips={true}
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

        return columns.map((item) => {
            const { sysName, tooltip } = item;
            return {
                ...item,
                name: t(`columns.${sysName}`),
                sortable: true,
                type: "common",
                tooltipName: tooltip && t(`columns.tooltips.${sysName}`),
            };
        });
    }

    function getStatusCols() {
        if (!loans) return [];

        const timePeriod = new TimePeriod(loans, lastBkiCreationDate);

        return timePeriod.result.map((item) => {
            const milliseconds = Date.parse(item);
            return {
                name: statusFormat.format(milliseconds),
                type: "status",
            };
        });
    }
};

export default CreditHistory;
