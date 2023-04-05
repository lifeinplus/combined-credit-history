import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Routes, Route } from "react-router-dom";
import Cookies from "universal-cookie";

import { Navbar } from "./layouts";

import NotFound from "./pages/NotFound";
import Report from "./pages/Report";
import ReportList from "./pages/ReportList";

import { langs } from "./util";

const App = () => {
    const { i18n } = useTranslation();

    const cookies = new Cookies();
    const extended_data = cookies.get("extended_data") || "no";
    const [showExtendedData, setShowExtendedData] = useState(
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
                <div className="container-fluid">
                    <Routes>
                        <Route path="/" element={<ReportList />} />
                        <Route path="/reports">
                            <Route index element={<ReportList />} />
                            <Route
                                path=":id"
                                element={
                                    <Report
                                        handleExtend={handleExtend}
                                        showExtendedData={showExtendedData}
                                    />
                                }
                            />
                        </Route>
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
            </main>
        </>
    );
};

export default App;
