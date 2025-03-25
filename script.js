document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Simple form validation
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if(name && email && message) {
    document.getElementById('response-message').textContent = "Thank you for reaching out! I will get back to you soon.";
  } else {
    document.getElementById('response-message').textContent = "Please fill in all fields.";
    document.getElementById('response-message').style.color = "red";
  }
});
