import React from "react";
import { useTranslation } from "react-i18next";

import { Navbar } from "./Layouts";
import Report from "./Pages/Report";

import { lngs } from "./util";

import data from "./data/3.json";

const App = () => {
    const { i18n } = useTranslation();
    const [showExtendedData, setShowExtendedData] = React.useState(false);

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
        const lng = Object.keys(lngs).filter(
            (lng) => lng !== i18n.resolvedLanguage
        );

        i18n.changeLanguage(lng);
    }

    function handleExtend() {
        setShowExtendedData(!showExtendedData);
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
