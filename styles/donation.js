function donate() {
    let balanceElement = document.getElementById("balanceAmount");
    let donationInput = document.getElementById("donationAmount");
    
    // Get current balance and donation amount
    let currentBalance = parseInt(balanceElement.innerText.replace(' BDT', ''));
    let donationAmount = parseInt(donationInput.value);

    // Ensure the donation amount is valid
    if (!isNaN(donationAmount) && donationAmount > 0 && donationAmount <= currentBalance) {
        // Subtract the donation amount from the balance
        let newBalance = currentBalance - donationAmount;
        balanceElement.innerText = newBalance + " BDT";
        
        // Clear the donation input field
        donationInput.value = '';
    } else {
        alert("Please enter a valid donation amount!");
    }
}
