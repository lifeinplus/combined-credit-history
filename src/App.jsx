import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Routes, Route } from "react-router-dom";
import Cookies from "universal-cookie";

import { Navbar } from "./layouts";

import NotFound from "./pages/NotFound";
import Report from "./pages/Report";
import Reports from "./pages/Reports";

import { langs } from "./util";

const App = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "light"
    );

    const { i18n } = useTranslation();

    const cookies = new Cookies();
    const extended_data = cookies.get("extended_data") || "no";
    const [showExtendedData, setShowExtendedData] = useState(
        extended_data === "yes" ? true : false
    );

    document.onkeydown = (event) => {
        if (!event.altKey) return;

        if (event.code === "KeyE") {
            handleExtend();
        }

        if (event.code === "KeyL") {
            changeLanguage();
        }

        if (event.code === "KeyT") {
            toggleTheme();
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

    const toggleTheme = () => {
        const newMode = theme === "light" ? "dark" : "light";
        setTheme(newMode);
    };

    useEffect(() => {
        localStorage.setItem("theme", theme);
        document.body.className = theme;
    }, [theme]);

    return (
        <>
            <header>
                <Navbar theme={theme} toggleTheme={toggleTheme} />
            </header>
            <main>
                <div className="container-fluid">
                    <Routes>
                        <Route path="/" element={<Reports theme={theme} />} />
                        <Route path="/reports">
                            <Route index element={<Reports theme={theme} />} />
                            <Route
                                path=":reportId"
                                element={
                                    <Report
                                        handleExtend={handleExtend}
                                        showExtendedData={showExtendedData}
                                        theme={theme}
                                    />
                                }
                            />
                        </Route>
                        <Route path="*" element={<NotFound theme={theme} />} />
                    </Routes>
                </div>
            </main>
        </>
    );
};

export default App;
