import { useTranslation } from "react-i18next";
import { respectivePaymentAmounts } from "./util";

const PaymentAmounts = ({ data, showExtendedData: extended }) => {
    const { t } = useTranslation(["credit_history"]);

    const obligationCols = extended ? "col-lg-4" : "col-lg-5";
    const paymentCols = extended ? "col-lg-8" : "col-lg-7";

    return (
        <div className="row justify-content-between text-center pe-0">
            <div className={`${obligationCols} pe-0`}>
                <ListGroup justify={"start"} type={"obligation"} />
            </div>
            <div className={`${paymentCols} pe-0`}>
                <ListGroup justify={"end"} type={"payment"} />
            </div>
        </div>
    );

    function ListGroup({ justify, type }) {
        const amounts = defineAmounts(type);

        return (
            <ul
                className={`list-group list-group-horizontal mb-3 justify-content-lg-${justify} justify-content-sm-center`}
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
            .map((item) => ({
                ...item,
                value: data[item.sysName],
            }));
    }
};

export default PaymentAmounts;
