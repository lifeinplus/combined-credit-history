import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { CreditHistory, PersonalData } from "../layouts";

const Report = ({ handleExtend, showExtendedData }) => {
    const { reportId } = useParams();

    const [data, setData] = useState();
    const [reports, setReports] = useState();

    useEffect(() => {
        fetch(`../data/${reportId}.json`)
            .then((response) => response.json())
            .then((json) => setData(json));
    }, [reportId]);

    useEffect(() => {
        fetch(`../data/reports.json`)
            .then((response) => response.json())
            .then(({ reports }) => setReports(reports));
    }, []);

    const report =
        reports && reports.find((item) => item.reportId === Number(reportId));

    return (
        <>
            {report && data && (
                <>
                    <PersonalData
                        appCreationDate={report.appCreationDate}
                        appNumber={report.appNumber}
                        data={data}
                        protocol={report}
                    />
                    <CreditHistory
                        data={data}
                        handleExtend={handleExtend}
                        showExtendedData={showExtendedData}
                    />
                </>
            )}
        </>
    );
};

export default Report;
