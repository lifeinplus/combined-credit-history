import { nanoid } from "nanoid";

import { Entry } from "./Entry";
import { Header } from "./Header";

const Documents = (props) => {
    const { data } = props;

    const documents = data.personInfo.map((item) => ({
        ...item,
        id: nanoid(),
    }));

    return (
        <table>
            <thead>
                <Header />
            </thead>
            <tbody>
                {documents.map((item) => (
                    <Entry key={item.id} document={item} />
                ))}
            </tbody>
        </table>
    );
};

export { Documents };
