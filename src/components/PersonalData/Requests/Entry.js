const Entry = (props) => {
    return (
        <li>
            <div>
                <small>{props.name}</small>
                <span>{props.value}</span>
            </div>
        </li>
    );
};

export { Entry };
