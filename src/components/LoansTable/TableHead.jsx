import { useTranslation } from "react-i18next";

const TableHead = (props) => {
    const { t } = useTranslation(["credit_history"]);

    return (
        <thead>
            <tr className="table-warning">
                {props.fields.map((field) => (
                    <Th
                        key={field.sysName || field.name}
                        field={{
                            ...field,
                            name: field.name || t(`fields.${field.sysName}`),
                        }}
                        sortRows={props.sortRows}
                    />
                ))}
            </tr>
        </thead>
    );

    function Th(props) {
        const { field } = props;
        const colorClass = field.extended ? "table-info" : "";

        return field.status ? (
            <th scope="col">{field.name}</th>
        ) : (
            <th
                className={colorClass}
                onClick={(event) => {
                    props.sortRows(event, field);
                }}
                scope="col"
            >
                {field.name}
            </th>
        );
    }
};

export { TableHead };
