const Head = (props) => {
    return (
        <thead>
            <tr>
                {props.loanFields.map((item) => (
                    <th key={item.id}>{item.name}</th>
                ))}
            </tr>
        </thead>
    );
};

export default Head;
