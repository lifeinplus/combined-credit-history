import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ReportList = () => {
    const [protocols, setProtocols] = useState([]);

    useEffect(() => {
        fetch(`../data/protocol.json`)
            .then((response) => response.json())
            .then((json) => setProtocols(json.protocols));
    }, []);

    return (
        <div className="container-fluid">
            <div className="row panel pt-2 border border-top-0 rounded-bottom">
                <div className="col">
                    <ul>
                        {protocols.map(({ id, clientFullName }) => (
                            <li key={id}>
                                <Link to={`/reports/${id}`}>
                                    {clientFullName}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ReportList;
