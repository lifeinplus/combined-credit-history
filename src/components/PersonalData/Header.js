import { format } from "date-fns";

const Header = (props) => {
    const creationDate = format(
        new Date(props.creationDate),
        "yyyy-MM-dd HH:mm:ss"
    );

    return (
        <div>
            <h1>Personal Data</h1>
            <p>
                <small>Application No</small>
                <span>{props.applicationNumber}</span>
                <small>Creation Date</small>
                <span>{creationDate}</span>
            </p>
        </div>
    );
};

export default Header;
