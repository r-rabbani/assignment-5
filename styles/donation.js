// Function to handle the donation process
function donate(button) {
    const card = button.closest('.card-body');
    const donationInput = card.querySelector('input');
    const balanceElement = document.getElementById("balanceAmount");

    // current balance and donation amount
    let currentBalance = parseInt(balanceElement.innerText.replace(' BDT', ''));
    let donationAmount = parseInt(donationInput.value);

    // Validate the donation amount
    if (!isNaN(donationAmount) && donationAmount > 0 && donationAmount <= currentBalance) {
        // Subtract the donation amount from the current balance
        let newBalance = currentBalance - donationAmount;
        balanceElement.innerText = newBalance + " BDT"; 

        // Clear the donation field
        donationInput.value = '';

        // Get the card title and show the modal
        const cardTitle = card.querySelector('.card-title').textContent;
        showModal(cardTitle);

    } else {
        alert("Please enter a valid donation amount!"); // Alert if the input is invalid
    }
}

// Function to show the modal
function showModal(cardTitle) {
    const modal = document.getElementById('donationModal'); // Get the modal element
    const modalTitle = document.getElementById('modalTitle'); // Get the modal title element
    modalTitle.textContent = `Thank you for contributing to '${cardTitle}'`; // Set the title dynamically
    modal.classList.add('modal-open'); // Show the modal (add class to display)
}

// Close modal function
document.getElementById('closeModal').addEventListener('click', function () {
    const modal = document.getElementById('donationModal');
    modal.classList.remove('modal-open'); // Hide the modal when close is clicked
});

// Add event listeners to all "Donate Now" buttons
document.querySelectorAll('.btn-primary').forEach((button) => {
    button.addEventListener('click', function () {
        donate(this); // Pass the clicked button to the donate function
    });
});
