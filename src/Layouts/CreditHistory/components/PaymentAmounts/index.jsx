import { useTranslation } from "react-i18next";
import { useTheme } from "../../../../hooks/ThemeContext";
import { joinClasses, langs } from "../../../../util";
import { obligationFields, paymentFields } from "./util";

const PaymentAmounts = ({ data = {}, showExtendedData }) => {
    const { i18n, t } = useTranslation(["credit_history"]);
    const lang = langs[i18n.resolvedLanguage];
    const numberFormat = new Intl.NumberFormat(lang.locale);

    const paymentLangSysNames = paymentFields.reduce((result, item) => {
        return item.country === lang.countryCode
            ? { ...result, [item.type]: item.sysName }
            : result;
    }, {});

    const obligationLangSysNames = obligationFields.reduce((result, item) => {
        return item.country === lang.countryCode
            ? { ...result, [item.type]: item.sysName }
            : result;
    }, {});

    const obligations = getAmounts(obligationFields);
    const payments = getAmounts(paymentFields);

    return (
        <div className="row justify-content-between text-center">
            <div className={showExtendedData ? "col-lg-4" : "col-lg-5"}>
                <Group amounts={obligations} justify="start" />
            </div>
            <div className={showExtendedData ? "col-lg-8" : "col-lg-7"}>
                <Group amounts={payments} justify="end" />
            </div>
        </div>
    );

    function getAmounts(fields) {
        return fields
            .filter(
                ({ extended, sysName, hide }) =>
                    !hide &&
                    sysName !== paymentLangSysNames.chb &&
                    sysName !== paymentLangSysNames.flc &&
                    (!extended || (extended && showExtendedData))
            )
            .map((item) => {
                const { sysName, type } = item;
                const langSysName =
                    obligationLangSysNames[type] || paymentLangSysNames[type];
                const value = data[sysName] ?? data[langSysName];

                return {
                    ...item,
                    name: t(`amounts.${sysName}`),
                    value: numberFormat.format(value),
                };
            });
    }
};

function Group({ amounts, justify }) {
    const theme = useTheme();

    return (
        <ul
            className={joinClasses([
                `list-group`,
                `list-group-horizontal`,
                `justify-content-sm-center`,
                `justify-content-lg-${justify}`,
                `mb-3`,
            ])}
        >
            {amounts.map(({ context, name, sysName, value }) => {
                const contextClass = `list-group-item-${context}`;
                const darkContextClass =
                    theme === "dark" && `cch-list-group-item-${context}`;

                return (
                    <li
                        key={sysName}
                        className={joinClasses([
                            "list-group-item",
                            "cch-list-group-item",
                            context && (darkContextClass || contextClass),
                            theme,
                            "text-truncate",
                        ])}
                    >
                        {name}
                        <div className="fw-bold">{value}</div>
                    </li>
                );
            })}
        </ul>
    );
}

export default PaymentAmounts;
