import { useTranslation } from "react-i18next";

import Header from "../../components/Header";
import Table from "../../components/Table";
import RequestCounts from "./components/RequestCounts";

import { customFields } from "./util";
import { joinClasses } from "../../util";

const PersonalData = ({
    appCreationDate,
    appNumber,
    persons,
    requestCounts,
    score,
    theme,
}) => {
    const { t } = useTranslation(["personal_data"]);

    const columns = customFields.map((item) => ({
        ...item,
        name: t(`document.${item.sysName}`),
    }));

    return (
        <div className="container-fluid mb-3">
            <div
                className={joinClasses([
                    `row panel-${theme} pt-2 rounded-bottom`,
                    `border border-top-0`,
                    theme === "dark" && "cch-border-dark",
                ])}
            >
                <div className="col">
                    <div className="row">
                        <Header
                            date={{
                                caption: "app_creation_date",
                                value: appCreationDate,
                            }}
                            iconName={"bi-file-person"}
                            nameSpaces={["personal_data"]}
                            number={{
                                caption: "app_number",
                                value: appNumber,
                            }}
                            theme={theme}
                        />
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-12 col-lg-7 col-xl-8">
                            <Table
                                id={"pd"}
                                columns={columns}
                                data={persons}
                                mobileView={true}
                                textDifference={true}
                                theme={theme}
                            />
                        </div>
                        <div className="col-md-8 col-lg-5 col-xl-4 mb-sm-3">
                            <RequestCounts
                                counts={requestCounts}
                                score={score}
                                theme={theme}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalData;
