import ReqEntry from "./ReqEntry";
import ReqHeader from "./ReqHeader";
import { requestNames, requestMicroNames } from "../../../util";

const Requests = (props) => {
    const { counts, isMicro } = props;
    const names = isMicro ? requestMicroNames : requestNames;

    return (
        <ul>
            <ReqHeader isMicro={isMicro} />
            {names.map((item) => (
                <ReqEntry name={item.name} value={counts[item.sysName]} />
            ))}
        </ul>
    );
};

export { Requests };
