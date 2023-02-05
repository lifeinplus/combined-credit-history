const TableHead = ({ columns }) => {
    return (
        <thead className="align-middle">
            <tr className="table-primary">
                {columns.map((item) => (
                    <Th key={item.sysName} column={item} />
                ))}
            </tr>
        </thead>
    );

    function Th({ column }) {
        return <th scope="col">{column.name}</th>;
    }
};

export default TableHead;
