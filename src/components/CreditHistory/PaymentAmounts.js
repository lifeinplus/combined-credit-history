const PaymentAmounts = (props) => {
    const { list } = props;

    return (
        <ul>
            {list.map((item) => (
                <li key={item.id}>
                    <small>{item.name}</small>
                    <span>{item.value}</span>
                </li>
            ))}
        </ul>
    );
};

export default PaymentAmounts;
