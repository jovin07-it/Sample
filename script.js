// UPI Details
const upiID = "shriraamsj21-1@oksbi";
const name = "Jovin Jeffin";
const amount = "2500";
const currency = "INR";
const note = "Payment for Order #123";

// UPI Payment URL (clickable link)
const upiURL = `upi://pay?pa=${upiID}&pn=${encodeURIComponent(name)}&am=${amount}&cu=${currency}&tn=${encodeURIComponent(note)}`;

// Set the link
document.getElementById("upiLink").href = upiURL;

// Generate QR Code
new QRCode(document.getElementById("qrcode"), {
    text: upiURL,
    width: 180,
    height: 180,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
});

