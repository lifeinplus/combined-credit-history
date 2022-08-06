const PaymentFlcAmounts = (props) => {
    return (
        <ul>
            <li>
                <small>Payments amount 4892-U: RUB</small>
                <span>{props.paymentAmountFlcTotal}</span>
            </li>
        </ul>
    );
};

export default PaymentFlcAmounts;
