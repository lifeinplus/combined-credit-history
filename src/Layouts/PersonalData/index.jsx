import DocumentsTable from "./components/DocumentsTable";
import Header from "../../components/Header";
import RequestCounts from "./components/RequestCounts";

const PersonalData = ({ data }) => {
    return (
        <div className="container-fluid mb-3">
            <div className="row panel pt-2 pb-3 border border-top-0 rounded-bottom">
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
                            <DocumentsTable data={data} />
                        </div>
                        <div className="col-md-8 col-lg-5 col-xl-4">
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
