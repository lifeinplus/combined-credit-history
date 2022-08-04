import { DocEntry } from "./DocEntry";
import { DocHeader } from "./DocHeader";

const Documents = (props) => {
    return (
        <table>
            <thead>
                <DocHeader />
            </thead>
            <tbody>
                {props.documents.map((document) => (
                    <DocEntry document={document} />
                ))}
            </tbody>
        </table>
    );
};

export { Documents };
