// You can add any additional interactivity here, if required
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio loaded');
});
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message sent successfully!');
    // You can integrate with an email service or backend API for actual message sending
});
