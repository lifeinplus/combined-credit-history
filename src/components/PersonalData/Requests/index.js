import ReqEntry from "./ReqEntry";
import ReqHeader from "./ReqHeader";
import { Match } from "../../../utils";

const RequestCounts = (props) => {
    return (
        <ul>
            <ReqHeader type={props.type} />
            {Match.requestCounts
                .filter((item) => item.type === props.type)
                .map((item) => (
                    <ReqEntry
                        key={item.id}
                        name={item.name}
                        value={props.counts[item.sysName]}
                    />
                ))}
            {props.type === "all" && (
                <ReqEntry name={"Score"} value={props.score} />
            )}
        </ul>
    );
};

export { RequestCounts };
