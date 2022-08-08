import Header from "./Header";
import { Documents } from "./Documents";
import { RequestCounts } from "./Requests";

function PersonalData(props) {
    return (
        <div>
            <Header
                applicationNumber={props.applicationNumber}
                creationDate={props.creationDate}
            />
            <Documents documents={props.documents} />
            <RequestCounts counts={props.requestCounts} />
            <RequestCounts
                counts={props.requestMicrocreditCounts}
                isMicro={true}
            />
        </div>
    );
}

export { PersonalData };
