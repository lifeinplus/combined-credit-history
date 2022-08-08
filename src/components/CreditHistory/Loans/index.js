import { nanoid } from "nanoid";

import { Match } from "../../../helpers";

import Body from "./Body";
import Head from "./Head";
import { TimePeriod } from "./TimePeriod";

const Loans = (props) => {
    const loanFields = getLoanFields();

    return (
        <table>
            <Head
                loanFields={loanFields}
                showExtendedData={props.showExtendedData}
            />
            <Body
                loanFields={loanFields}
                loans={props.loans}
                showExtendedData={props.showExtendedData}
            />
        </table>
    );

    function getLoanFields() {
        const result = Match.loanFields.filter(
            (item) =>
                !item.extended || (item.extended && props.showExtendedData)
        );

        const timePeriod = new TimePeriod(
            props.lastBkiCreationDate,
            props.loans
        );

        const textMonths = timePeriod.getTextMonths();

        textMonths.forEach((item) =>
            result.push({ id: nanoid(), name: item, status: true })
        );

        return result;
    }
};

export { Loans };
