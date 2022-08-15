import { Date } from "../../utils";

const Header = (props) => {
    const { data } = props;

    return (
        <div>
            <h1>Personal Data</h1>
            <p>
                <small>Application No</small>
                <span>{data.DOCUMENTNUMBER}</span>
                <small>Creation Date</small>
                <span>{Date.formatHeader(data.CREATIONDATE)}</span>
            </p>
        </div>
    );
};

export default Header;
