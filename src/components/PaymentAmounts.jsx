import { useTranslation } from "react-i18next";

import { Match } from "../utils";

const PaymentAmounts = (props) => {
    const { t } = useTranslation(["credit_history"]);

    const { showExtendedData } = props;

    const obligationCols = showExtendedData ? "col-lg-4" : "col-lg-5";
    const paymentCols = showExtendedData ? "col-lg-8" : "col-lg-7";

    return (
        <div className="row justify-content-end text-center">
            <div className={obligationCols}>
                <ListGroup type={"obligation"} />
            </div>
            <div className={paymentCols}>
                <ListGroup type={"payment"} />
            </div>
        </div>
    );

    function ListGroup(props) {
        const amounts = defineAmounts(props.type);

        return (
            <ul className="list-group list-group-horizontal justify-content-lg-end justify-content-sm-center">
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
