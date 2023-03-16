import { useTranslation } from "react-i18next";

import { respectivePaymentAmounts } from "./util";
import { lngs } from "../../../../util";

const PaymentAmounts = ({ data, showExtendedData: extended }) => {
    const { t, i18n } = useTranslation(["credit_history"]);
    const lng = lngs[i18n.resolvedLanguage];
    const numberFormat = new Intl.NumberFormat(lng.locale);

    const obligationCols = extended ? "col-lg-4" : "col-lg-5";
    const paymentCols = extended ? "col-lg-8" : "col-lg-7";

    return (
        <div className="row justify-content-between text-center">
            <div className={obligationCols}>
                <ListGroup justify={"start"} type={"obligation"} />
            </div>
            <div className={paymentCols}>
                <ListGroup justify={"end"} type={"payment"} />
            </div>
        </div>
    );

    function ListGroup({ justify, type }) {
        const amounts = defineAmounts(type);

        return (
            <ul
                className={`list-group list-group-horizontal
                justify-content-sm-center
                justify-content-lg-${justify}
                mb-3`}
            >
                {amounts.map(({ context, sysName, value }) => {
                    const contextClass = context
                        ? `list-group-item-${context}`
                        : "";

                    return (
                        <li
                            key={sysName}
                            className={`list-group-item ${contextClass} text-truncate`}
                        >
                            {t(`amounts.${sysName}`)}
                            <div className="fw-bold">{value}</div>
                        </li>
                    );
                })}
            </ul>
        );
    }

    function defineAmounts(type) {
        return respectivePaymentAmounts
            .filter(
                (item) =>
                    item.type === type &&
                    (!item.extended || (item.extended && extended))
            )
            .map((item) => {
                const value = data[item.sysName];
                return { ...item, value: numberFormat.format(value) };
            });
    }
};

export default PaymentAmounts;
