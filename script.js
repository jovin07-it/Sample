document.getElementById("payBtn").addEventListener("click", function() {
    const amount = document.getElementById("amount").value;
    if (!amount || amount <= 0) {
        alert("Please enter a valid amount!");
        return;
    }

    // Dynamic UPI details
    const upiID = "jovinjeffin@okicici";       // Replace with your UPI ID
    const name = "Jovin J";            // Your name/business name
    const transactionNote = "Payment for Order #123"; 
    const currency = "INR";

    // Create UPI URL
    const upiLink = `upi://pay?pa=${upiID}&pn=${encodeURIComponent(name)}&am=${amount}&cu=${currency}&tn=${encodeURIComponent(transactionNote)}`;

    // Redirect to UPI app
    window.location.href = upiLink;

    // Show info to user
    document.getElementById("status").innerText = "Redirecting to UPI app...";
});
