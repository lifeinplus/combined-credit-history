import ReqEntry from "./ReqEntry";
import ReqHeader from "./ReqHeader";
import { requestNames, requestMicroNames } from "../../../util";
import { nanoid } from "nanoid";

const Requests = (props) => {
    const { counts, isMicro } = props;
    const names = isMicro ? requestMicroNames : requestNames;

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
