const PaymentAmounts = (props) => {
    const { amounts } = props;

    return (
        <ul>
            {amounts.map((item) => (
                <li key={item.id}>
                    <small>{item.name}</small>
                    <span>{item.value}</span>
                </li>
            ))}
        </ul>
    );
};

export { PaymentAmounts };
