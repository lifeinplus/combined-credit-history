const CreditObligations = (props) => {
    return (
        <ul>
            <li>
                <small>Loans amount: RUB</small>
                <span>{props.loansAmount}</span>
            </li>
            <li>
                <small>Cards amount: RUB</small>
                <span>{props.cardsAmount}</span>
            </li>
        </ul>
    );
};

export default CreditObligations;
