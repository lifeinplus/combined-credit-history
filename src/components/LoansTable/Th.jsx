const Th = (props) => {
    const { field } = props;

    return field.status ? (
        <th>{field.name}</th>
    ) : (
        <th
            onClick={(event) => {
                props.sortRows(event, field);
            }}
        >
            {field.name}
        </th>
    );
};

export default Th;
