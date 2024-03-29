// Typing animation for landing page
const typingAnimation = document.querySelector('.typing-animation');
let text = "Rohan Medikonda.";
let index = 0;

function type() {
    if (index < text.length) {
        typingAnimation.textContent += text.charAt(index);
        index++;
        setTimeout(type, 100);
    }
}

type();

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add click event listeners to project "Learn More" buttons
const projectButtons = document.querySelectorAll('.project-link');
projectButtons.forEach(button => {
    button.addEventListener('click', function() {
        const projectUrl = this.getAttribute('data-url');
        if (projectUrl) {
            window.open(projectUrl, '_blank');
        }
    });
});

// Hover effect for navigation links
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.color = '#333';
    });
    link.addEventListener('mouseleave', function() {
        this.style.color = '#fff';
    });
});