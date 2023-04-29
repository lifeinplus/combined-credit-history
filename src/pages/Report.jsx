import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CreditHistory, PersonalData } from "../layouts";

const url = "http://localhost:3001";

const Report = ({ handleExtend, showExtendedData }) => {
    const { reportId } = useParams();

    const report = useDataGetByReportId("/reportGet", reportId);
    const persons = useDataGetByReportId("/personsGet", reportId);
    const requestCounts = useDataGetByReportId("/requestCountsGet", reportId);
    const commons = useDataGetByReportId("/commonsGet", reportId);
    const loans = useDataGetByReportId("/loansGet", reportId);

    const delinquencies = useDataGetByLoans("/delinquenciesGet", loans);
    const flcs = useDataGetByLoans("/flcsGet", loans);
    const paymentHistories = useDataGetByLoans("/paymentHistoriesGet", loans);

    return (
        <>
            <PersonalData
                appCreationDate={report?.appCreationDate}
                appNumber={report?.appNumber}
                persons={persons}
                requestCounts={requestCounts}
                score={commons?.score}
            />
            <CreditHistory
                common={commons}
                handleExtend={handleExtend}
                loans={loans}
                delinquencies={delinquencies}
                flcs={flcs}
                paymentHistories={paymentHistories}
                reportCreationDate={report?.reportCreationDate}
                showExtendedData={showExtendedData}
            />
        </>
    );
};

function useDataGetByReportId(method, id) {
    const [data, setData] = useState(undefined);

    useEffect(() => {
        axios
            .get(url + method, { params: { reportId: id } })
            .then((response) => setData(response.data));
    }, []);

    return data;
}

function useDataGetByLoans(method, loans) {
    const [ids, setIds] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        if (!loans?.length) return;
        setIds(loans.map((item) => item._id));
    }, [loans]);

    useEffect(() => {
        if (!ids.length) return;

        axios
            .get(url + method, { params: { loanIds: ids } })
            .then((response) => setData(response.data));
    }, [ids]);

    return data;
}

export default Report;
