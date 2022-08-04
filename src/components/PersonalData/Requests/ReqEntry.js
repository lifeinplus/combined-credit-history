const ReqEntry = (props) => {
    return (
        <li>
            <div>
                <small>{props.name}</small>
                <span>{props.value}</span>
            </div>
        </li>
    );
};

export default ReqEntry;
