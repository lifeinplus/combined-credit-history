import { useTranslation } from "react-i18next";

import Header from "../../components/Header";
import Table from "../../components/Table";
import RequestCounts from "./components/RequestCounts";

import { customFields } from "./util";

const PersonalData = ({ data }) => {
    const {
        CREATIONDATE,
        DOCUMENTNUMBER,
        ScoringBall,
        microcreditRequestsCounts,
        personInfo,
        requestsCounts,
    } = data;

    const { t } = useTranslation(["personal_data"]);

    const columns = customFields.map((item) => ({
        ...item,
        name: t(`document.${item.sysName}`),
    }));

    return (
        <div className="container-fluid mb-3">
            <div className="row panel pt-2 border border-top-0 rounded-bottom">
                <div className="col">
                    <div className="row">
                        <Header
                            date={{
                                caption: "app_creation_date",
                                value: CREATIONDATE,
                            }}
                            iconName={"bi-file-person"}
                            nameSpaces={["personal_data"]}
                            number={{
                                caption: "app_number",
                                value: DOCUMENTNUMBER,
                            }}
                        />
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-12 col-lg-7 col-xl-8">
                            <Table
                                id={"pd"}
                                columns={columns}
                                data={personInfo}
                                textDifference={true}
                            />
                        </div>
                        <div className="col-md-8 col-lg-5 col-xl-4 mb-sm-3">
                            <RequestCounts
                                microcreditRequestsCounts={
                                    microcreditRequestsCounts
                                }
                                requestsCounts={requestsCounts}
                                score={ScoringBall}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalData;
