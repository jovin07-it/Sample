// UPI Details
const upiID = "jovinjeffin@okicici";
const name = "Jovin Jeffin";
const amount = "2500";
const currency = "INR";
const note = "Payment for Order #123";

// Official App-Specific Links
const gpayURL = `https://pay.google.com/gp/p/ui/pay?pa=${upiID}&pn=${encodeURIComponent(name)}&am=${amount}&cu=${currency}&tn=${encodeURIComponent(note)}`;
const phonepeURL = `https://phonepe.com/pay/?pa=${upiID}&pn=${encodeURIComponent(name)}&am=${amount}&cu=${currency}&tn=${encodeURIComponent(note)}`;
const paytmURL = `https://paytm.com/upi-pay?pa=${upiID}&pn=${encodeURIComponent(name)}&am=${amount}&cu=${currency}&tn=${encodeURIComponent(note)}`;

// Set button links
document.getElementById("gpay").href = gpayURL;
document.getElementById("phonepe").href = phonepeURL;
document.getElementById("paytm").href = paytmURL;

// Generate QR Code (UPI Generic URL)
const upiLink = `upi://pay?pa=${upiID}&pn=${encodeURIComponent(name)}&am=${amount}&cu=${currency}&tn=${encodeURIComponent(note)}`;
new QRCode(document.getElementById("qrcode"), {
    text: upiLink,
    width: 180,
    height: 180,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
});

// Copy UPI ID to clipboard
document.getElementById("copyBtn").addEventListener("click", () => {
    navigator.clipboard.writeText(upiID);
    alert("UPI ID copied!");
});
