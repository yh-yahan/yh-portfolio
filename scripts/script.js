const burgerBtn = document.getElementById('burger-btn')
const navbar = document.getElementById('navbar')

burgerBtn.addEventListener('click', function (event) {
    navbar.classList.toggle('hidden')
    event.stopPropagation()
})

document.addEventListener('click', function (event) {
    if (!navbar.contains(event.target) && !burgerBtn.contains(event.target)) {
        navbar.classList.add('hidden')
    }
})

navbar.addEventListener('click', function (event) {
    event.stopPropagation()
})

emailjs.init("NjjKkYMcvSQP-UxZr");

document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const status = document.getElementById('status');

  emailjs.sendForm(
    'service_d9hsskr', 
    'template_nf7401p', 
    this
  )
    .then(function () {
      status.innerHTML = '<p style="color:green;">Message sent successfully!</p>';
      document.getElementById('contact-form').reset();
    }, function (error) {
      status.innerHTML = '<p style="color:red;">Failed to send. Please try again.</p>';
      console.log('EmailJS error:', error);
    });
});
