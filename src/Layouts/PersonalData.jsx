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
            <div className="row">
                <div className="col-8">
                    <Documents data={props.data} />
                </div>
                <div className="col-4">
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
