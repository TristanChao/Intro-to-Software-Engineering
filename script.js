const $contactForm = document.getElementById("contact-form");

$contactForm.addEventListener('submit', function(event) {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  if (!name || !email || !message) {
    event.preventDefault();
    alert("Please fill in all fields.");
  }
});