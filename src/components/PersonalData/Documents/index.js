import { DocEntry } from "./DocEntry";
import { DocHeader } from "./DocHeader";
import { nanoid } from "nanoid";

const Documents = (props) => {
    const { data } = props;

    const documents = data.personInfo.map((item) => ({
        ...item,
        id: nanoid(),
    }));

    return (
        <table>
            <thead>
                <DocHeader />
            </thead>
            <tbody>
                {documents.map((item) => (
                    <DocEntry key={item.id} document={item} />
                ))}
            </tbody>
        </table>
    );
};

export { Documents };
