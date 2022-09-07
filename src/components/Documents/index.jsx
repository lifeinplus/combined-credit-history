import { nanoid } from "nanoid";

import { TableBody } from "./TableBody";
import { TableHead } from "./TableHead";

// TODO: Move to Layouts under PersonalData
const Documents = (props) => {
    const { data } = props;

    const documents = data.personInfo.map((item) => ({
        ...item,
        id: nanoid(),
    }));

    return (
        <div className="table-responsive mb-3">
            <table className="table table-striped mb-0">
                <TableHead />
                <TableBody documents={documents} />
            </table>
        </div>
    );
};

export { Documents };
