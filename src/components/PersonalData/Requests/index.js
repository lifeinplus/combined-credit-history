import ReqEntry from "./ReqEntry";
import ReqHeader from "./ReqHeader";
import { Match } from "../../../helpers";

const RequestCounts = (props) => {
    const { counts, isMicro } = props;
    const matchList = isMicro
        ? Match.requestMicrocreditCounts
        : Match.requestCounts;

    return (
        <ul>
            <ReqHeader isMicro={isMicro} />
            {matchList.map((item) => (
                <ReqEntry
                    key={item.id}
                    name={item.name}
                    value={counts[item.sysName]}
                />
            ))}
        </ul>
    );
};

export { RequestCounts };
