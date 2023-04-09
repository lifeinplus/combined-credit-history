import { useTranslation } from "react-i18next";

import { customFields } from "./util";
import { joinClasses, langs } from "../../../../util";

const PaymentAmounts = ({ data, showExtendedData: extended, theme }) => {
    const { t, i18n } = useTranslation(["credit_history"]);
    const lang = langs[i18n.resolvedLanguage];
    const numberFormat = new Intl.NumberFormat(lang.locale);

    return (
        <div className="row justify-content-between text-center">
            <Group
                cols={extended ? "col-lg-4" : "col-lg-5"}
                justify={"start"}
                type={"obligation"}
            />
            <Group
                cols={extended ? "col-lg-8" : "col-lg-7"}
                justify={"end"}
                type={"payment"}
            />
        </div>
    );

    function Group({ cols, justify, type }) {
        const fields = getFields(type);

        const groupClasses = joinClasses([
            "list-group",
            "list-group-horizontal",
            "justify-content-sm-center",
            `justify-content-lg-${justify}`,
            "mb-3",
        ]);

        return (
            <div className={cols}>
                <ul className={groupClasses}>
                    {fields.map((field) => (
                        <Item key={field.sysName} field={field} />
                    ))}
                </ul>
            </div>
        );
    }

    function Item({ field }) {
        const { sysName, context, value } = field;

        const contextClass = `list-group-item-${context}`;
        const darkContextClass =
            theme === "dark" && `cch-list-group-item-dark-${context}`;

        const itemClassName = joinClasses([
            "list-group-item",
            theme === "dark" && "cch-list-group-item-dark",
            context && (darkContextClass || contextClass),
            "text-truncate",
        ]);

        return (
            <li className={itemClassName}>
                {t(`amounts.${sysName}`)}
                <div className="fw-bold">{value}</div>
            </li>
        );
    }

    function getFields(type) {
        return customFields
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
