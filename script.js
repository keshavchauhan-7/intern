document.getElementById("qr-container").addEventListener("click", function () {
    var qrCodeDiv = document.getElementById("qr-code");
    qrCodeDiv.classList.toggle("hidden");  // Toggle visibility of the QR code
});

// QR Code toggle for Google
document.getElementById("google-container").addEventListener("click", function (event) {
    var qrCodeDiv = document.getElementById("google-qr-code");
    qrCodeDiv.classList.toggle("hidden");  // Toggle visibility of the QR code
    event.stopPropagation(); // Prevent event from bubbling up to the document
});

// QR Code toggle for Download APP button
document.getElementById("download-container").addEventListener("click", function (event) {
    var qrCodeDiv = document.getElementById("qr-code-download");
    qrCodeDiv.classList.toggle("hidden");  // Toggle visibility of the QR code
    event.stopPropagation(); // Prevent event from bubbling up to the document
});

document.addEventListener("click", function (event) {
    var qrCodeDiv = document.getElementById("qr-code");
    var qrContainer = document.getElementById("qr-container");

    var googleQrCodeDiv = document.getElementById("google-qr-code");
    var googleContainer = document.getElementById("google-container");

    var downloadQrCodeDiv = document.getElementById("qr-code-download");
    var downloadContainer = document.getElementById("download-container");

    // Check if the click was outside the QR code container
    if (!qrCodeDiv.contains(event.target) && !qrContainer.contains(event.target)) {
        qrCodeDiv.classList.add("hidden");  // Hide the QR code
    }

    if (!googleQrCodeDiv.contains(event.target) && !googleContainer.contains(event.target)) {
        googleQrCodeDiv.classList.add("hidden");  // Hide the Google QR code
    }

    // Check if the click was outside the QR code container
    if (!downloadQrCodeDiv.contains(event.target) && !downloadContainer.contains(event.target)) {
        downloadQrCodeDiv.classList.add("hidden");  // Hide the QR code
    }
});
