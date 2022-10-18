const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Add 'active' class if observation target is inside viewport
            entry.target.parentElement.classList.add('active');
        } else {
            // Remove 'active' class otherwise
            entry.target.parentElement.classList.remove('active');
        }
    });
});

// Declares what to observe, and observes its properties.

// Animations for skills
const skillItems = document.querySelectorAll('.item');
skillItems.forEach((item) => {
    observer.observe(item.childNodes[5]);
});

// Animations for work cards
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach((card) => {
    observer.observe(card.childNodes[1]);
});