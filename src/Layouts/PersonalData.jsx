import { Header } from "../components/Header";
import { Documents } from "../components/Documents";
import { RequestCounts } from "../components/RequestCounts";

function PersonalData(props) {
    const { data } = props;

    return (
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
                nameSpaces={["personal_data"]}
            />
            <div className="row justify-content-center">
                <div className="col-md-12 col-lg-7 col-xl-8">
                    <Documents data={props.data} />
                </div>
                <div className="col-md-8 col-lg-5 col-xl-4">
                    <RequestCounts
                        requestsCounts={data.requestsCounts}
                        microcreditRequestsCounts={
                            data.microcreditRequestsCounts
                        }
                        score={data.ScoringBall}
                    />
                </div>
            </div>
        </div>
    );
}

export { PersonalData };
