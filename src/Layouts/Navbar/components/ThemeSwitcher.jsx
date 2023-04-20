const ThemeSwitcher = ({ theme, toggleTheme }) => {
    const iconName = theme === "light" ? "sun" : "moon-stars";

    return (
        <div className="theme-switcher me-3">
            <button
                type="button"
                className={`btn btn-sm cch-btn-theme ${theme}`}
                onClick={toggleTheme}
            ></button>
        </div>
    );
};

export default ThemeSwitcher;
