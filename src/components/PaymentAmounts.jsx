import { useTranslation } from "react-i18next";

const PaymentAmounts = (props) => {
    const { t } = useTranslation(["credit_history"]);
    const { amounts } = props;

    return (
        <ul className="list-unstyled">
            {amounts.map(({ sysName, value }) => (
                <li key={sysName} className="list-inline-item">
                    <small>{t(`amounts.${sysName}`)}</small>{" "}
                    <span>{value}</span>
                </li>
            ))}
        </ul>
    );
};

export { PaymentAmounts };
