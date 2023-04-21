import { useTheme } from "../../../hooks/ThemeContext";

const ScrollButtons = ({ tableId }) => {
    const theme = useTheme();
    const table = document.getElementById(tableId);

    const buttons = [
        { onClick: handleScrollStart, icon: "bi-chevron-bar-left" },
        { onClick: handleScrollLeft, icon: "bi-arrow-left-circle" },
        { onClick: handleScrollRight, icon: "bi-arrow-right-circle" },
        { onClick: handleScrollEnd, icon: "bi-chevron-bar-right" },
    ];

    function handleScrollStart() {
        table.scrollLeft = 0;
    }

    function handleScrollLeft() {
        const { clientWidth, scrollLeft } = table;
        const scrollNew = scrollLeft - (clientWidth * 3) / 4;
        table.scrollLeft = scrollNew > 0 ? scrollNew : 0;
    }

    function handleScrollRight() {
        const { clientWidth } = table;
        table.scrollLeft += (clientWidth * 3) / 4;
    }

    function handleScrollEnd() {
        table.scrollLeft += table.scrollWidth;
    }

    return (
        <>
            {tableId && (
                <div
                    className={`btn-group btn-group-sm cch-btn-group-scroll ${theme}`}
                    role="group"
                >
                    {buttons.map(({ icon, onClick }) => (
                        <button
                            key={icon}
                            type="button"
                            className={`btn btn-primary cch-btn-primary ${theme}`}
                            onClick={onClick}
                        >
                            <i className={`bi ${icon}`}></i>
                        </button>
                    ))}
                </div>
            )}
        </>
    );
};

export default ScrollButtons;
