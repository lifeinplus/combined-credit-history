import DocumentsTable from "./components/DocumentsTable";
import Header from "../../components/Header";
import RequestCounts from "./components/RequestCounts";

const PersonalData = ({ data }) => {
    return (
        <div className="container-fluid">
            <div
                className="row pt-2 pb-3 border border-top-0 rounded-bottom mb-3"
                style={{ backgroundColor: "#F9F9FA" }}
            >
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
                <div className="row justify-content-center pe-0">
                    <div className="col-md-12 col-lg-7 col-xl-8 pe-0">
                        <DocumentsTable data={data} />
                    </div>
                    <div className="col-md-8 col-lg-5 col-xl-4 pe-0">
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
    );
};

export default PersonalData;
