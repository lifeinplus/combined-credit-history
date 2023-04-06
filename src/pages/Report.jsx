import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { CreditHistory, PersonalData } from "../layouts";

const Report = ({ handleExtend, showExtendedData }) => {
    const { reportId } = useParams();

    const [database, setDatabase] = useState();

    useEffect(() => {
        fetch(`../data/database.json`)
            .then((response) => response.json())
            .then((json) => setDatabase(json));
    }, []);

    const report =
        database &&
        database.reports.find((item) => item.reportId === Number(reportId));

    const common =
        database &&
        database.commons.find((item) => item.reportId === Number(reportId));

    const loans =
        database &&
        database.loans.filter((item) => item.reportId === Number(reportId));

    const loanIds = loans && loans.map(({ loanId }) => loanId);

    const delinquency =
        database &&
        database.delinquency.filter((item) =>
            loanIds.some((id) => id === item.loanId)
        );

    const flc =
        database &&
        database.flc.filter((item) => loanIds.some((id) => id === item.loanId));

    const paymentHistory =
        database &&
        database.paymentHistory.filter((item) =>
            loanIds.some((id) => id === item.loanId)
        );

    const persons =
        database &&
        database.persons.filter((item) => item.reportId === Number(reportId));

    const requestCounts =
        database &&
        database.requestCounts.find(
            (item) => item.reportId === Number(reportId)
        );

    return (
        <>
            {report && (
                <>
                    <PersonalData
                        appCreationDate={report.appCreationDate}
                        appNumber={report.appNumber}
                        persons={persons}
                        requestCounts={requestCounts}
                        score={common.score}
                    />
                    <CreditHistory
                        common={common}
                        handleExtend={handleExtend}
                        loans={loans}
                        delinquency={delinquency}
                        flc={flc}
                        paymentHistory={paymentHistory}
                        reportCreationDate={report.reportCreationDate}
                        showExtendedData={showExtendedData}
                    />
                </>
            )}
        </>
    );
};

export default Report;
