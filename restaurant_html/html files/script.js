document.getElementById("reservation-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const guests = document.getElementById("guests").value;
    const seating = document.getElementById("seating").value;
    const requests = document.getElementById("requests").value;

    // Display success message and sparkles
    document.getElementById("reservation-success").style.display = "block";

    // Generate receipt details
    const receiptDetails = `
        Name: ${name}<br>
        Phone: ${phone}<br>
        Email: ${email}<br>
        Date: ${date}<br>
        Time: ${time}<br>
        Guests: ${guests}<br>
        Seating: ${seating}<br>
        Special Requests: ${requests || "None"}
    `;
    document.getElementById("receipt-details").innerHTML = receiptDetails;
    document.getElementById("receipt").style.display = "block";

    // Show sparkles
    createSparkles();

});

// Download receipt as PNG
document.getElementById("download-receipt").addEventListener("click", function() {
    html2canvas(document.getElementById("receipt")).then(function(canvas) {
        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "reservation_receipt.png";
        document.body.appendChild(link); // Append link to body
        link.click(); // Programmatically click the link to trigger download
        document.body.removeChild(link); // Remove link after downloading
    });
});

// Function to create sparkling effect
function createSparkles() {
    const sparklesContainer = document.getElementById("sparkles");
    sparklesContainer.style.display = "block";

    // Create sparkles
    for (let i = 0; i < 30; i++) {
        const sparkle = document.createElement("div");
        sparkle.classList.add("sparkle");
        sparkle.style.left = Math.random() * window.innerWidth + "px";
        sparkle.style.top = Math.random() * window.innerHeight + "px";
        sparkle.style.animationDuration = Math.random() * 1 + 0.5 + "s"; // Random duration
        sparkle.style.opacity = Math.random() * 0.5 + 0.5; // Random opacity
        sparklesContainer.appendChild(sparkle);
        
        // Remove sparkle after animation ends
        sparkle.addEventListener("animationend", () => {
            sparkle.remove();
        });
    }
}
