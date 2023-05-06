import { useTranslation } from "react-i18next";

import Header from "../components/Header";
import { useTheme } from "../hooks/ThemeContext";
import { joinClasses } from "../util";

const About = () => {
    const theme = useTheme();
    const { t } = useTranslation(["about"]);
    const textTheme = theme === "light" ? "text-dark" : "text-light";

    return (
        <div className="container-fluid mb-3">
            <div
                className={joinClasses([
                    `row panel ${theme} pt-3 pb-2 rounded-bottom`,
                    `border border-top-0`,
                    theme === "dark" && "cch-border-dark",
                ])}
            >
                <div className="col">
                    <div className="row">
                        <Header
                            iconName={"bi-file-text"}
                            nameSpaces={["about"]}
                        />
                    </div>
                    <Title section={"definition"} t={t} textTheme={textTheme} />
                    <div className="row">
                        <div className="col">
                            <p className={textTheme}>{t("definition.value")}</p>
                        </div>
                    </div>
                    <Title section={"tasks"} t={t} textTheme={textTheme} />
                    <div className="row">
                        <div className="col">
                            <Tasks t={t} textTheme={textTheme} />
                        </div>
                    </div>
                    <Title section={"legend"} t={t} textTheme={textTheme} />
                    <div className="row">
                        <div className="col">
                            <Legend t={t} textTheme={textTheme} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

function Tasks({ t, textTheme }) {
    const tasks = ["t1", "t2", "t3", "t4", "t5", "t6", "t7"];

    return (
        <ol className={textTheme}>
            {tasks.map((item) => (
                <li key={item}>
                    <dl className="row">
                        <dd className="col-sm-9 col-lg-10">
                            {t(`tasks.${item}.text`)}
                        </dd>
                        <dt className="col-sm-3 col-lg-2 text-truncate">
                            <i className="d-none d-sm-inline bi bi-caret-left-fill"></i>
                            <i className="d-sm-none bi bi-caret-up-fill"></i>{" "}
                            {t(`tasks.${item}.title`)}
                        </dt>
                    </dl>
                </li>
            ))}
        </ol>
    );
}

function Legend({ t, textTheme }) {
    const legend = [
        { left: "0", right: "1" },
        { left: "A", right: "B" },
        { left: "C", right: "D" },
        { left: "E", right: "F" },
        { left: "G", right: "-" },
    ];

    return (
        <>
            {legend.map((item, i) => (
                <div key={i} className="row">
                    <div className="col-3 col-sm-2 col-lg-1 order-sm-2 text-center mb-2">
                        <span
                            className={`cch-badge status cch-text-bg-${item.left}`}
                        >
                            {item.left}
                        </span>
                    </div>
                    <div className="col-9 col-sm-4 col-lg-5 order-sm-1 text-sm-end mb-2">
                        <span className={textTheme}>
                            {t(`legend.${item.left}`)}
                        </span>
                    </div>
                    <div className="col-3 col-sm-2 col-lg-1 order-sm-3 text-center mb-2">
                        <span
                            className={`cch-badge status cch-text-bg-${item.right}`}
                        >
                            {item.right}
                        </span>
                    </div>
                    <div className="col-9 col-sm-4 col-lg-5 order-sm-4 mb-2">
                        <span className={textTheme}>
                            {t(`legend.${item.right}`)}
                        </span>
                    </div>
                </div>
            ))}
        </>
    );
}

function Title({ section, t, textTheme }) {
    const value = t(`${section}.title`);

    return (
        <div className="row my-2">
            <div className="col">
                <h5 className={textTheme}>{value}</h5>
            </div>
        </div>
    );
}

export default About;
