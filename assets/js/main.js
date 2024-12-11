let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    if (index >= slides.length) currentSlideIndex = 0;
    if (index < 0) currentSlideIndex = slides.length - 1;

    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        dots[i].classList.remove('active');
    });

    slides[currentSlideIndex].classList.add('active');
    dots[currentSlideIndex].classList.add('active');
}

function changeSlide(direction) {
    currentSlideIndex += direction;
    showSlide(currentSlideIndex);
}

function setSlide(index) {
    currentSlideIndex = index;
    showSlide(currentSlideIndex);
}

function autoSlide() {
    currentSlideIndex++;
    showSlide(currentSlideIndex);
}

setInterval(autoSlide, 5000); // Slide changes every 5 seconds

// Initialize the first slide as active
showSlide(currentSlideIndex);


// Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return;
    }

    alert(`Thank you for contacting us, ${name}! We will get back to you soon.`);
    document.getElementById('contactForm').reset();
});
