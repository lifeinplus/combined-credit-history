import { Utils } from "../../helpers";

const Header = (props) => {
    const { data } = props;

    return (
        <div>
            <h1>Credit History</h1>
            <p>
                <small>Number of accounts</small>
                <span>{data.loansCount}</span>
                <small>Report date</small>
                <span>{Utils.formatHeaderDate(data.lastBkiCreationDate)}</span>
            </p>
        </div>
    );
};

export { Header };
