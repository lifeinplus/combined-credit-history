import { nanoid } from "nanoid";

import { TableBody } from "./TableBody";
import { TableHead } from "./TableHead";

const Documents = (props) => {
    const { data } = props;

    const documents = data.personInfo.map((item) => ({
        ...item,
        id: nanoid(),
    }));

    return (
        <div className="table-responsive">
            <table className="table">
                <TableHead />
                <TableBody documents={documents} />
            </table>
        </div>
    );
};

export { Documents };
