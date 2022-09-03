import { useTranslation } from "react-i18next";

import { Match } from "../utils";

const PaymentAmounts = (props) => {
    const { t } = useTranslation(["credit_history"]);

    const { showExtendedData: extended } = props;

    const obligationCols = extended ? "col-lg-4" : "col-lg-5";
    const paymentCols = extended ? "col-lg-8" : "col-lg-7";

    return (
        <div className="row justify-content-between text-center pe-1">
            <div className={obligationCols}>
                <ListGroup justify={"start"} type={"obligation"} />
            </div>
            <div className={`${paymentCols} pe-1`}>
                <ListGroup justify={"end"} type={"payment"} />
            </div>
        </div>
    );

    function ListGroup(props) {
        const amounts = defineAmounts(props.type);

        return (
            <ul
                className={`list-group list-group-horizontal mb-3 justify-content-lg-${props.justify} justify-content-sm-center`}
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
        return Match.paymentAmounts
            .filter(
                (item) =>
                    item.type === type &&
                    (!item.extended ||
                        (item.extended && props.showExtendedData))
            )
            .map((item) => ({
                ...item,
                value: props.data[item.sysName],
            }));
    }
};

export { PaymentAmounts };
