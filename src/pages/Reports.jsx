import axios from "axios";
import { useEffect, useState } from "react";

import { useTheme } from "../hooks/ThemeContext";
import ReportList from "../layouts/ReportList";
import { joinClasses } from "../util";

const Reports = () => {
    const theme = useTheme();

    const [database, setDatabase] = useState(undefined);
    const [reports, setReports] = useState([]);

    useEffect(() => {
        fetch(`../data/database.json`)
            .then((response) => response.json())
            .then((json) => setDatabase(json));
    }, []);

    useEffect(() => {
        axios.get("http://localhost:3001/reportsGet").then((response) => {
            setReports(response.data);
        });
    }, []);

    return (
        <>
            {reports && <ReportList reports={reports} />}
            {false && (
                <div className="container-fluid mb-3">
                    <div
                        className={joinClasses([
                            `row panel ${theme} rounded`,
                            `border`,
                            theme === "dark" && "cch-border-dark",
                        ])}
                    >
                        <div className="col">
                            <div
                                className="btn btn-primary"
                                onClick={() => {
                                    if (database) {
                                        axios.post(
                                            "http://localhost:3001/reportsInsert",
                                            database
                                        );
                                    }
                                }}
                            >
                                reports
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Reports;
