import { Date } from "../../utils";

const Header = (props) => {
    const { data } = props;

    return (
        <div>
            <h1>Credit History</h1>
            <p>
                <small>Number of accounts</small>
                <span>{data.loansCount}</span>
                <small>Report date</small>
                <span>{Date.formatHeader(data.lastBkiCreationDate)}</span>
            </p>
        </div>
    );
};

export { Header };
