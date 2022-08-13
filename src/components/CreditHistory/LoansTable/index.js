import React from "react";
import { nanoid } from "nanoid";

import { Match } from "../../../helpers";
import { Sorting } from "./Sorting";
import { TimePeriod } from "./TimePeriod";

import Body from "./Body";
import Head from "./Head";

const LoansTable = (props) => {
    const [table, setTable] = React.useState({
        fields: getFields(),
        loans: props.loans,
    });

    React.useEffect(() => {
        setTable((oldTable) => ({
            ...oldTable,
            fields: getFields(),
        }));
    }, [props.showExtendedData]);

    return (
        <table>
            <Head fields={table.fields} sortRows={sortRows} />
            <Body fields={table.fields} loans={table.loans} />
        </table>
    );

    function getFields() {
        const result = Match.fields.filter(
            (item) =>
                !item.extended || (item.extended && props.showExtendedData)
        );

        const timePeriod = new TimePeriod(props.loans);
        const textMonths = timePeriod.getTextMonths(props.lastBkiCreationDate);

        textMonths.forEach((item) =>
            result.push({ id: nanoid(), name: item, status: true })
        );

        return result;
    }

    function sortRows(event, field) {
        const sorting = new Sorting(table.loans);
        sorting.onClick(event, field);

        setTable((oldTable) => ({
            ...oldTable,
            loans: sorting.getLoans(),
        }));
    }
};

export { LoansTable };
