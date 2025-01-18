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


// Function to Open Modal
function openModal() {
    document.getElementById('modal').classList.remove('hidden');
  }
  
  // Function to Close Modal
  function closeModal() {
    document.getElementById('modal').classList.add('hidden');
  }
  
  // Close modal on clicking outside the modal content
  document.addEventListener("click", function (event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
      closeModal();
    }
  });

  
 // Auto-scroll lyrics effect
const lyricsContainer = document.getElementById("lyrics");
const lyricsContent = document.getElementById("lyricsContent");
const audioPlayer = document.getElementById("audioPlayer");

audioPlayer.addEventListener("play", () => {
    let scrollHeight = lyricsContainer.scrollHeight - lyricsContainer.clientHeight;
    lyricsContent.style.transition = "transform 15s linear";
    lyricsContent.style.transform = `translateY(-${scrollHeight}px)`;
});

audioPlayer.addEventListener("pause", () => {
    lyricsContent.style.transition = "none";
    lyricsContent.style.transform = "translateY(0)";
});

// Character counter for input box
const melodyInput = document.getElementById("melodyInput");
melodyInput.addEventListener("input", function () {
    document.querySelector("p.text-right").innerText = `${this.value.length}/500`;
});

  