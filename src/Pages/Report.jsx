import { CreditHistory, PersonalData } from "../Layouts";

const Report = ({ data, handleExtend, showExtendedData }) => {
    return (
        <div className="container-fluid">
            <PersonalData data={data} />
            <CreditHistory
                data={data}
                handleExtend={handleExtend}
                showExtendedData={showExtendedData}
            />
        </div>
    );
};

export default Report;
