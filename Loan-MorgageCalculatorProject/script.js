function computeLoan() {
    var amount = document.getElementById('amount').value;
    var interest_rate = document.getElementById("interest_rate").value;
    var months = document.getElementById("months").value; 

    amount = parseFloat(amount);
    interest_rate = parseFloat(interest_rate);
    months = parseInt(months);

    if (isNaN(amount) || isNaN(interest_rate) || isNaN(months) || months <= 0) {
        document.getElementById('payment').innerHTML = "Please enter valid input values!";
        return;
    }

    var interest = (amount * (interest_rate * 0.01)) / months;
    var payment = ((amount / months) + interest).toFixed(2);

    payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    document.getElementById('payment').innerHTML = "Monthly Payment = $" + payment;
}
