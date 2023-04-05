import { useTranslation } from "react-i18next";

import Header from "../../components/Header";
import Table from "../../components/Table";

import { customFields } from "./util";

const ReportList = ({ reports }) => {
    const { t } = useTranslation(["report_list"]);

    const columns = customFields.map((item) => ({
        ...item,
        name: t(`table.${item.sysName}`),
    }));

    return (
        <div className="container-fluid">
            <div className="row panel pt-2 border border-top-0 rounded-bottom">
                <div className="col">
                    <div className="row">
                        <Header
                            iconName={"bi-card-list"}
                            nameSpaces={["report_list"]}
                        />
                    </div>
                    <div className="row">
                        <div className="col">
                            <Table
                                id={"rl"}
                                columns={columns}
                                data={reports}
                                rowHover={true}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReportList;
