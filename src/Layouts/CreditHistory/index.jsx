import { useTranslation } from "react-i18next";

import Header from "../../components/Header";
import Table from "../../components/Table";

import { useTheme } from "../../hooks/ThemeContext";
import { getDateFormat, joinClasses } from "../../util";

import PaymentAmounts from "./components/PaymentAmounts";
import { TimePeriod, customFields } from "./util";

const CreditHistory = ({
    common,
    handleExtend,
    loans,
    delinquencies,
    flcs,
    paymentHistories,
    reportCreationDate,
    showExtendedData,
}) => {
    const { t } = useTranslation(["credit_history"]);
    const theme = useTheme();

    const dateFormat = getDateFormat("ru", "status");
    const columns = defineColumns();

    const data = loans?.map((element) => {
        delinquencies?.forEach((item) => {
            if (item.loanId !== element._id) {
                return;
            }

            element = {
                ...element,
                delinquency0Plus: item.delinquency0Plus,
                delinquency30Plus: item.delinquency30Plus,
                delinquency60Plus: item.delinquency60Plus,
                delinquency90Plus: item.delinquency90Plus,
                delinquencyRefinancing: item.delinquencyRefinancing,
            };
        });

        flcs?.forEach((item) => {
            if (item.loanId !== element._id) {
                return;
            }

            element = {
                ...element,
                flcNchb: item.flcNchb,
                flcPayment: item.flcPayment,
                flcTaken: item.flcTaken,
                flcUcb: item.flcUcb,
            };
        });

        paymentHistories?.forEach((item) => {
            if (item.loanId === element._id) {
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
                                value: loans?.length,
                            }}
                            showExtendedData={showExtendedData}
                        />
                    </div>
                    <PaymentAmounts
                        data={common}
                        showExtendedData={showExtendedData}
                    />
                    <div className="row">
                        <div className="col">
                            <Table
                                id={"ch"}
                                columns={columns}
                                data={data}
                                rowActive={true}
                                rowHover={true}
                                scrolling={true}
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
        if (!loans?.length) return [];

        const timePeriod = new TimePeriod(paymentHistories, reportCreationDate);

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
