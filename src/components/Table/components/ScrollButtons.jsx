import { useTheme } from "../../../hooks/ThemeContext";

const ScrollButtons = ({ btnRefs, handleScroll, wrapperRef }) => {
    const theme = useTheme();

    const buttons = [
        { id: "btnStart", ref: "btnStartRef", icon: "bi-chevron-bar-left" },
        { id: "btnLeft", ref: "btnLeftRef", icon: "bi-arrow-left-circle" },
        { id: "btnRight", ref: "btnRightRef", icon: "bi-arrow-right-circle" },
        { id: "btnEnd", ref: "btnEndRef", icon: "bi-chevron-bar-right" },
    ];

    return (
        <>
            {wrapperRef.current && (
                <div
                    className={`btn-group btn-group-sm cch-btn-group-scroll ${theme}`}
                    role="group"
                >
                    {buttons.map(({ id, ref, icon }) => (
                        <button
                            key={id}
                            id={id}
                            className={`btn btn-primary cch-btn-primary ${theme}`}
                            onClick={handleScroll}
                            ref={btnRefs[ref]}
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
