import { CreditHistory, PersonalData } from "../Layouts";

const Report = ({ data }) => {
    return (
        <div className="container-fluid">
            <PersonalData data={data} />
            <CreditHistory data={data} />
        </div>
    );
};

export default Report;
