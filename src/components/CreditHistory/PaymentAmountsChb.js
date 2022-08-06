const PaymentChbAmounts = (props) => {
    return (
        <ul>
            <li>
                <small>Payments amount CHB: RUB</small>
                <span>{props.paymentAmountChbTotal}</span>
            </li>
            <li>
                <small>RUB</small>
                <span>{props.paymentAmountChbRub}</span>
            </li>
            <li>
                <small>USD</small>
                <span>{props.paymentAmountChbUsd}</span>
            </li>
            <li>
                <small>EUR</small>
                <span>{props.paymentAmountChbEur}</span>
            </li>
        </ul>
    );
};

export default PaymentChbAmounts;
