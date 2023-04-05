import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { CreditHistory, PersonalData } from "../layouts";

const Report = ({ handleExtend, showExtendedData }) => {
    const { id } = useParams();
    const [data, setData] = useState();
    const [protocol, setProtocol] = useState();

    useEffect(() => {
        fetch(`../data/${id}.json`)
            .then((response) => response.json())
            .then((json) => setData(json));
    }, [id]);

    useEffect(() => {
        fetch(`../data/protocol.json`)
            .then((response) => response.json())
            .then(({ protocols }) =>
                setProtocol(protocols.find((item) => item.id === Number(id)))
            );
    }, [id]);

    return (
        <>
            {protocol && data && (
                <>
                    <PersonalData
                        appCreationDate={protocol.appCreationDate}
                        appNumber={protocol.appNumber}
                        data={data}
                        protocol={protocol}
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
