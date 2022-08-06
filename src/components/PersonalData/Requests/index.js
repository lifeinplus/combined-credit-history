import ReqEntry from "./ReqEntry";
import ReqHeader from "./ReqHeader";
import { Match } from "../../../helpers";

const Requests = (props) => {
    const { counts, isMicro } = props;
    const names = isMicro ? Match.requestMicroNames : Match.requestNames;

    return (
        <ul>
            <ReqHeader isMicro={isMicro} />
            {names.map((item) => (
                <ReqEntry
                    key={item.id}
                    name={item.name}
                    value={counts[item.sysName]}
                />
            ))}
        </ul>
    );
};

export { Requests };
