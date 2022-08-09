const ReqHeader = (props) => {
    return (
        <li>
            <span>
                {props.type === "all"
                    ? "Requests"
                    : "Requests for microcredits"}
            </span>
        </li>
    );
};

export default ReqHeader;
