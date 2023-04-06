import { useEffect, useState } from "react";
import ReportList from "../layouts/ReportList";

const Reports = () => {
    const [reports, setReports] = useState();

    useEffect(() => {
        fetch(`../data/reports.json`)
            .then((response) => response.json())
            .then((json) => setReports(json.reports));
    }, []);

    return <>{reports && <ReportList reports={reports} />}</>;
};

export default Reports;
