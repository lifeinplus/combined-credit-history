import Th from "./Th";

const Head = (props) => {
    return (
        <thead>
            <tr>
                {props.fields.map((field) => (
                    <Th
                        key={field.id}
                        field={field}
                        sortRows={props.sortRows}
                    />
                ))}
            </tr>
        </thead>
    );
};

export default Head;
