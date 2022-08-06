const ToggleControls = (props) => {
    return (
        <div>
            <button onClick={props.toggleCreditHistory}>Expand</button>
            <button onClick={props.toggleExtendedData}>+</button>
        </div>
    );
};

export { ToggleControls };
