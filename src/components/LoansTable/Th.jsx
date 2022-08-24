const Th = (props) => {
    const { field } = props;

    return field.status ? (
        <th scope="col">{field.name}</th>
    ) : (
        <th
            onClick={(event) => {
                props.sortRows(event, field);
            }}
            scope="col"
        >
            {field.name}
        </th>
    );
};

export default Th;
