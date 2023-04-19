const ScrollButtons = ({ tableId, theme }) => {
    const handleScrollStart = () => {
        const element = document.getElementById(tableId);
        element.scrollLeft = 0;
    };

    const handleScrollLeft = () => {
        const element = document.getElementById(tableId);
        const { clientWidth, scrollLeft } = element;
        const scrollNew = scrollLeft - (clientWidth * 3) / 4;
        element.scrollLeft = scrollNew > 0 ? scrollNew : 0;
    };

    const handleScrollRight = () => {
        const element = document.getElementById(tableId);
        const { clientWidth } = element;
        element.scrollLeft += (clientWidth * 3) / 4;
    };

    const handleScrollEnd = () => {
        const element = document.getElementById(tableId);
        element.scrollLeft += element.scrollWidth;
    };

    return (
        <>
            {tableId && (
                <div
                    className={`btn-group btn-group-sm cch-btn-group-scroll ${theme}`}
                    role="group"
                >
                    <button
                        type="button"
                        className={`btn btn-primary cch-btn-primary ${theme}`}
                        onClick={handleScrollStart}
                    >
                        <i className="bi bi-chevron-bar-left"></i>
                    </button>
                    <button
                        type="button"
                        className={`btn btn-primary cch-btn-primary ${theme}`}
                        onClick={handleScrollLeft}
                    >
                        <i className="bi bi-arrow-left-circle"></i>
                    </button>
                    <button
                        type="button"
                        className={`btn btn-primary cch-btn-primary ${theme}`}
                        onClick={handleScrollRight}
                    >
                        <i className="bi bi-arrow-right-circle"></i>
                    </button>
                    <button
                        type="button"
                        className={`btn btn-primary cch-btn-primary ${theme}`}
                        onClick={handleScrollEnd}
                    >
                        <i className="bi bi-chevron-bar-right"></i>
                    </button>
                </div>
            )}
        </>
    );
};

export default ScrollButtons;
