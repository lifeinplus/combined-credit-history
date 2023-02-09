import { nanoid } from "nanoid";
import { useTranslation } from "react-i18next";

import Header from "../../components/Header";
import Table from "../../components/Table";
import RequestCounts from "./components/RequestCounts";

import { respectiveColumns } from "./util";

const PersonalData = ({ data }) => {
    const { t } = useTranslation(["personal_data"]);

    const columns = respectiveColumns.map((item) => ({
        ...item,
        name: t(`document.${item.sysName}`),
    }));

    const personInfo = data.personInfo.map((item) => ({
        ...item,
        id: nanoid(),
    }));

    return (
        <div className="container-fluid mb-3">
            <div className="row panel pt-2 border border-top-0 rounded-bottom">
                <div className="col">
                    <div className="row">
                        <Header
                            captions={{
                                date: "app_creation_date",
                                number: "app_number",
                            }}
                            data={{
                                date: data.CREATIONDATE,
                                number: data.DOCUMENTNUMBER,
                            }}
                            iconName={"bi-file-person"}
                            nameSpaces={["personal_data"]}
                        />
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-12 col-lg-7 col-xl-8">
                            <Table
                                columns={columns}
                                data={personInfo}
                                hover={false}
                            />
                        </div>
                        <div className="col-md-8 col-lg-5 col-xl-4 mb-sm-3">
                            <RequestCounts
                                microcreditRequestsCounts={
                                    data.microcreditRequestsCounts
                                }
                                requestsCounts={data.requestsCounts}
                                score={data.ScoringBall}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalData;
