// Initialize EmailJS with your user ID
(function () {
  emailjs.init("WIJDyInrTua-xH7jV"); // Replace with your actual User ID
})();

function sendEmail(event) {
  event.preventDefault();

  // Show loading state
  const button = event.target.querySelector("button");
  const originalText = button.innerHTML;
  button.innerHTML = "<span>Sending...</span>";
  button.disabled = true;

  // Get form data
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Send email using EmailJS
  emailjs
    .send("service_nhha6r8", "template_62rsejf", {
      from_name: name,
      reply_to: email,
      message: message,
    })
    .then(function (response) {
      // Show success message
      document.getElementById("success-message").style.display = "block";
      document.getElementById("error-message").style.display = "none";

      // Reset form
      document.getElementById("contactForm").reset();
    })
    .catch(function (error) {
      // Show error message
      document.getElementById("error-message").style.display = "block";
      document.getElementById("success-message").style.display = "none";
    })
    .finally(function () {
      // Reset button state
      button.innerHTML = originalText;
      button.disabled = false;
    });

  return false;
}
