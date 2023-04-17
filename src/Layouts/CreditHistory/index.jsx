import { useTranslation } from "react-i18next";

import Header from "../../components/Header";
import Table from "../../components/Table";
import PaymentAmounts from "./components/PaymentAmounts";

import { getDateFormat, joinClasses } from "../../util";
import { TimePeriod, customFields } from "./util";

const CreditHistory = ({
    common,
    handleExtend,
    loans,
    delinquency,
    flc,
    paymentHistory,
    reportCreationDate,
    showExtendedData,
    theme,
}) => {
    const { t } = useTranslation(["credit_history"]);
    const dateFormat = getDateFormat("ru", "status");
    const columns = defineColumns();

    const data = loans.map((element) => {
        delinquency.forEach((item) => {
            if (item.loanId === element.loanId) {
                element = { ...element, ...item };
            }
        });

        flc.forEach((item) => {
            if (item.loanId === element.loanId) {
                element = { ...element, ...item };
            }
        });

        paymentHistory.forEach((item) => {
            if (item.loanId === element.loanId) {
                const milliseconds = Date.parse(item.date);
                const name = dateFormat.format(milliseconds);
                element[name] = item.status;
            }
        });

        return element;
    });

    return (
        <div className="container-fluid mb-3">
            <div
                className={joinClasses([
                    `row panel ${theme} rounded`,
                    `border`,
                    theme === "dark" && "cch-border-dark",
                ])}
            >
                <div className="col">
                    <div className="row">
                        <Header
                            date={{
                                caption: "report_date",
                                value: reportCreationDate,
                            }}
                            handleExtend={handleExtend}
                            iconName={"bi-credit-card-2-front"}
                            nameSpaces={["credit_history"]}
                            number={{
                                caption: "number_of_accounts",
                                value: loans.length,
                            }}
                            showExtendedData={showExtendedData}
                            theme={theme}
                        />
                    </div>
                    <PaymentAmounts
                        data={common}
                        showExtendedData={showExtendedData}
                        theme={theme}
                    />
                    <div className="row">
                        <div className="col">
                            <Table
                                id={"ch"}
                                columns={columns}
                                data={data}
                                rowActive={true}
                                rowHover={true}
                                scrollButtons={true}
                                stickyHeader={true}
                                tooltips={true}
                                theme={theme}
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

        const timePeriod = new TimePeriod(paymentHistory, reportCreationDate);

        return timePeriod.result.map((item) => {
            const milliseconds = Date.parse(item);
            return {
                name: dateFormat.format(milliseconds),
                type: "status",
            };
        });
    }
};

export default CreditHistory;
