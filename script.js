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



document.getElementById("download-containertwo").addEventListener("click", function (event) {
    var qrCodeDiv = document.getElementById("qr-code-downloadtwo");
    qrCodeDiv.classList.toggle("hidden");  // Toggle visibility of the QR code
    event.stopPropagation(); // Prevent event from bubbling up to the document
});

document.getElementById("download-containerthree").addEventListener("click", function (event) {
    var qrCodeDiv = document.getElementById("qr-code-downloadthree");
    qrCodeDiv.classList.toggle("hidden");  // Toggle visibility of the QR code
    event.stopPropagation(); // Prevent event from bubbling up to the document
});

document.getElementById("download-containerfour").addEventListener("click", function (event) {
    var qrCodeDiv = document.getElementById("qr-code-downloadfour");
    qrCodeDiv.classList.toggle("hidden");  // Toggle visibility of the QR code
    event.stopPropagation(); // Prevent event from bubbling up to the document
});

document.getElementById("download-containerfive").addEventListener("click", function (event) {
    var qrCodeDiv = document.getElementById("qr-code-downloadfive");
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

    var downloadQrCodeDivTwo = document.getElementById("qr-code-downloadtwo");
    var downloadContainerTwo = document.getElementById("download-containertwo");

    var downloadQrCodeDivThree = document.getElementById("qr-code-downloadthree");
    var downloadContainerThree = document.getElementById("download-containerthree");

    var downloadQrCodeDivFour = document.getElementById("qr-code-downloadfour");
    var downloadContainerFour = document.getElementById("download-containerfour");

    var downloadQrCodeDivFive = document.getElementById("qr-code-downloadfive");
    var downloadContainerFive = document.getElementById("download-containerfive");
    

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

    if (!downloadQrCodeDivTwo.contains(event.target) && !downloadContainerTwo.contains(event.target)) {
        downloadQrCodeDivTwo.classList.add("hidden");  // Hide the QR code
    }

    if (!downloadQrCodeDivThree.contains(event.target) && !downloadContainerThree.contains(event.target)) {
        downloadQrCodeDivThree.classList.add("hidden");  // Hide the QR code
    }

    if (!downloadQrCodeDivFour.contains(event.target) && !downloadContainerFour.contains(event.target)) {
        downloadQrCodeDivFour.classList.add("hidden");  // Hide the QR code
    }

    if (!downloadQrCodeDivFive.contains(event.target) && !downloadContainerFive.contains(event.target)) {
        downloadQrCodeDivFive.classList.add("hidden");  // Hide the QR code
    }
});
