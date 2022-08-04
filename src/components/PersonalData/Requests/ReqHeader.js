const ReqHeader = (props) => {
    const title = props.isMicro ? "Requests for microcredits" : "Requests";

    return (
        <li>
            <span>{title}</span>
        </li>
    );
};

export default ReqHeader;
