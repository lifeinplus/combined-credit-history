const ToggleControls = (props) => {
    const { creditHistory, extendedData } = props.controls;

    return (
        <div>
            <button onClick={creditHistory.onClick}>
                {creditHistory.name}
            </button>
            <button onClick={extendedData.onClick}>{extendedData.name}</button>
        </div>
    );
};

export { ToggleControls };
