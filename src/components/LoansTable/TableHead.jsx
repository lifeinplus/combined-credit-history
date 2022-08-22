import { useTranslation } from "react-i18next";

import Th from "./Th";

const TableHead = (props) => {
    const { t } = useTranslation(["credit_history"]);

    const ths = props.fields.map((field) => (
        <Th
            key={field.id}
            field={{
                ...field,
                name: field.name || t(`fields.${field.sysName}`),
            }}
            sortRows={props.sortRows}
        />
    ));

    return (
        <thead>
            <tr>{ths}</tr>
        </thead>
    );
};

export { TableHead };
