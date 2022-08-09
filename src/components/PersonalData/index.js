import Header from "./Header";
import { Documents } from "./Documents";
import { RequestCounts } from "./Requests";

function PersonalData(props) {
    const { data } = props;

    return (
        <div>
            <Header data={props.data} />
            <Documents data={props.data} />
            <RequestCounts
                counts={data.requestsCounts}
                score={data.ScoringBall}
                type="all"
            />
            <RequestCounts
                counts={data.microcreditRequestsCounts}
                type="micro"
            />
        </div>
    );
}

export { PersonalData };
