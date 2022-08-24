import { CreditHistory, PersonalData } from "../Layouts";

const Report = (props) => {
    return (
        <div className="container-fluid">
            <PersonalData data={props.data} />
            <CreditHistory data={props.data} />
        </div>
    );
};

export { Report };
