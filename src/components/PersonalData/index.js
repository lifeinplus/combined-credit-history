import Header from "./Header";
import { Documents } from "./Documents";
import { RequestCounts } from "./Requests";

function PersonalData(props) {
    const { data } = props;

    return (
        <div>
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
