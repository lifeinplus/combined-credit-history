import { useTranslation } from "react-i18next";

import Header from "../../components/Header";
import Table from "../../components/Table";

import { customFields } from "./util";
import { joinClasses } from "../../util";

const ReportList = ({ reports, theme }) => {
    const { t } = useTranslation(["report_list"]);

    const columns = customFields.map((item) => ({
        ...item,
        name: t(`table.${item.sysName}`),
    }));

    return (
        <div className="container-fluid">
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
                            iconName={"bi-card-list"}
                            nameSpaces={["report_list"]}
                            theme={theme}
                        />
                    </div>
                    <div className="row">
                        <div className="col">
                            <Table
                                id={"rl"}
                                columns={columns}
                                data={reports}
                                rowHover={true}
                                theme={theme}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReportList;
