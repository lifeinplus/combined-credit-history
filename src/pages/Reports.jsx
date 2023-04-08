import { useEffect, useState } from "react";
import ReportList from "../layouts/ReportList";

const Reports = () => {
    const [database, setDatabase] = useState();

    useEffect(() => {
        fetch(`../data/database.json`)
            .then((response) => response.json())
            .then((json) => setDatabase(json));
    }, []);

    return <>{database && <ReportList reports={database.reports} />}</>;
};

export default Reports;
