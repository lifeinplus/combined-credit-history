import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Routes, Route } from "react-router-dom";
import Cookies from "universal-cookie";

import { Navbar } from "./layouts";
import NotFound from "./pages/NotFound";
import Report from "./pages/Report";
import Reports from "./pages/Reports";

import { useThemeUpdate } from "./hooks/ThemeContext";
import { langs } from "./util";

const App = () => {
    const { i18n } = useTranslation();
    const toggleTheme = useThemeUpdate();

    const cookies = new Cookies();
    const extended_data = cookies.get("extended_data") || "no";
    const [showExtendedData, setShowExtendedData] = useState(
        extended_data === "yes" ? true : false
    );

    document.onkeydown = ({ altKey, code, shiftKey }) => {
        if (!altKey) return;

        if (code === "KeyE") {
            handleExtend();
        }

        if (code === "KeyL") {
            changeLanguage(shiftKey);
        }

        if (code === "KeyT") {
            toggleTheme();
        }
    };

    function changeLanguage(shiftKey) {
        const keys = Object.keys(langs);
        const resolvedLanguage = i18n.resolvedLanguage;
        const resolvedIndex = keys.indexOf(resolvedLanguage);

        let nextIndex = shiftKey ? resolvedIndex - 1 : resolvedIndex + 1;

        if (nextIndex >= keys.length) {
            nextIndex = 0;
        }

        if (nextIndex < 0) {
            nextIndex = keys.length - 1;
        }

        i18n.changeLanguage(keys[nextIndex]);
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
                        <Route path="/" element={<Reports />} />
                        <Route path="/reports">
                            <Route index element={<Reports />} />
                            <Route
                                path=":reportId"
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
