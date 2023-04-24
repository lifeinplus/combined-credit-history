import { useTheme } from "../../../hooks/ThemeContext";

const ScrollButtons = ({ btnRefs, handleScroll, wrapperRef }) => {
    const theme = useTheme();

    const buttons = [
        { id: "btnStart", icon: "bi-chevron-bar-left" },
        { id: "btnLeft", icon: "bi-arrow-left-circle" },
        { id: "btnRight", icon: "bi-arrow-right-circle" },
        { id: "btnEnd", icon: "bi-chevron-bar-right" },
    ];

    return (
        <>
            {wrapperRef.current && (
                <div
                    className={`btn-group btn-group-sm cch-btn-group-scroll ${theme}`}
                    role="group"
                >
                    {buttons.map(({ id, icon }) => (
                        <button
                            key={id}
                            id={id}
                            className={`btn btn-primary cch-btn-primary ${theme}`}
                            onClick={handleScroll}
                            ref={btnRefs[id]}
                            type="button"
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
