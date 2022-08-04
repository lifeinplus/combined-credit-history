import Header from "./Header";
import { Documents } from "./Documents";
import { Requests } from "./Requests";

function PersonalData(props) {
    return (
        <div>
            <Header
                applicationNumber={props.applicationNumber}
                creationDate={props.creationDate}
            />
            <Documents documents={props.documents} />
            <Requests counts={props.requestsCounts} />
            <Requests counts={props.requestsMicrocreditCounts} isMicro={true} />
        </div>
    );
}

export { PersonalData };
