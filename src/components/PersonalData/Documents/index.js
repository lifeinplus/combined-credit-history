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
        <table>
            <TableHead />
            <TableBody documents={documents} />
        </table>
    );
};

export { Documents };
