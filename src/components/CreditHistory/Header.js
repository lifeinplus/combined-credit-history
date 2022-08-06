import { Utils } from "../../helpers";

const Header = (props) => {
    return (
        <div>
            <h1>Credit History</h1>
            <p>
                <small>Number of accounts</small>
                <span>{props.loansCount}</span>
                <small>Report date</small>
                <span>{Utils.formatHeaderDate(props.lastBkiCreationDate)}</span>
            </p>
        </div>
    );
};

export default Header;
