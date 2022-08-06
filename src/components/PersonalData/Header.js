import { Utils } from "../../helpers";

const Header = (props) => {
    return (
        <div>
            <h1>Personal Data</h1>
            <p>
                <small>Application No</small>
                <span>{props.applicationNumber}</span>
                <small>Creation Date</small>
                <span>{Utils.formatHeaderDate(props.creationDate)}</span>
            </p>
        </div>
    );
};

export default Header;
