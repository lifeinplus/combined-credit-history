import { useTranslation } from "react-i18next";

const PaymentAmounts = (props) => {
    const { t } = useTranslation(["credit_history"]);
    const { amounts } = props;

    return (
        <ul>
            {amounts.map(({ id, sysName, value }) => (
                <li key={id}>
                    <small>{t(`amounts.${sysName}`)}</small>
                    <span>{value}</span>
                </li>
            ))}
        </ul>
    );
};

export { PaymentAmounts };
