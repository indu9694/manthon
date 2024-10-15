$(document).ready(function() {
    // Generate QR Code
    const upiLink = "upi://pay?pa=kashyapavinash087@oksbi&pn=Avinash%20kashyap&am=10.00&cu=INR&aid=uGICAgICnweedXQ";
    $('#qr-code').qrcode({width: 200, height: 200, text: upiLink});

    // Countdown Timer
    let timeLeft = 480; // 8 minutes in seconds
    const timerElement = $('#timer');

    const countdown = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(countdown);
            timerElement.text("Time's up!");
            $('#submit-button').prop('disabled', true); // Disable the button after time's up
        } else {
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            timerElement.text(`Time left: ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
            timeLeft--;
        }
    }, 1000);

    // Download QR Code as image
    $('#download-qr').click(function() {
        const canvas = $('#qr-code canvas')[0];
        const link = document.createElement('a');
        link.href = canvas.toDataURL("image/png");
        link.download = 'qr-code.png';
        link.click();
    });

    // Form Submission
    $('#data-form').on('submit', function(e) {
        e.preventDefault();

        const fullName = $('#full-name').val();
        const mobileNumber = $('#mobile-number').val();
        const email = $('#email').val();
        const address = $('#address').val();

        // Prepare the message
        const message = `New Data Submission:\nFull Name: ${fullName}\nMobile Number: ${mobileNumber}\nEmail: ${email}\nAddress: ${address}`;

        // Encode the message for the URL
        const encodedMessage = encodeURIComponent(message);

        // Send the message to WhatsApp
        const whatsappNumber = '9027168683';
        const whatsappURL = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;

        // Open WhatsApp in a new tab
        window.open(whatsappURL, '_blank');

        // Show success message
        const messageDiv = $('#message');
        messageDiv.text('Data submitted successfully!');

        // Clear the form
        this.reset();
    });
});
