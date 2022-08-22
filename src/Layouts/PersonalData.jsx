import { Header } from "../components/PersonalDataHeader";
import { Documents } from "../components/Documents";
import { RequestCounts } from "../components/Requests";

function PersonalData(props) {
    const { data } = props;

    return (
        <div className="row">
            <Header data={props.data} />
            <div className="row">
                <div className="col-8">
                    <Documents data={props.data} />
                </div>
                <div className="col-4">
                    <div className="row">
                        <div className="col">
                            <RequestCounts
                                counts={data.requestsCounts}
                                score={data.ScoringBall}
                                type="all"
                            />
                        </div>
                        <div className="col">
                            <RequestCounts
                                counts={data.microcreditRequestsCounts}
                                type="micro"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { PersonalData };
