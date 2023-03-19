import React from "react";
import Cookies from "universal-cookie";
import { useTranslation } from "react-i18next";

import { Navbar } from "./Layouts";
import Report from "./Pages/Report";

import { langs } from "./util";

import data from "./data/1.json";

const App = () => {
    const cookies = new Cookies();
    const { i18n } = useTranslation();

    const extended_data = cookies.get("extended_data") || "no";
    const [showExtendedData, setShowExtendedData] = React.useState(
        extended_data === "yes" ? true : false
    );

    document.onkeydown = (event) => {
        if (!event.altKey) return;

        if (event.code === "KeyL") {
            changeLanguage();
        }

        if (event.code === "KeyE") {
            handleExtend();
        }
    };

    function changeLanguage() {
        const lang = Object.keys(langs).filter(
            (lang) => lang !== i18n.resolvedLanguage
        );

        i18n.changeLanguage(lang);
    }

    function handleExtend() {
        const value = !showExtendedData;
        setShowExtendedData(value);
        cookies.set("extended_data", value ? "yes" : "no");
    }

    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <Report
                    data={data}
                    handleExtend={handleExtend}
                    showExtendedData={showExtendedData}
                />
            </main>
        </>
    );
};

export default App;
