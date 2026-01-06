document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Scroll Reveal Animation
    // This watches elements and adds the 'show-element' class when they appear on screen
    const observerOptions = {
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show-element');
            }
        });
    }, observerOptions);

    const hiddenElements = document.querySelectorAll('.hidden-element');
    hiddenElements.forEach((el) => observer.observe(el));


    // 2. 3D Tilt Effect for Cards
    // This calculates mouse position relative to the card to rotate it slightly
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Calculate rotation (max 10 degrees)
            const xRotation = -((y - rect.height / 2) / rect.height * 10);
            const yRotation = ((x - rect.width / 2) / rect.width * 10);

            card.style.transform = `perspective(1000px) scale(1.02) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
        });

        card.addEventListener('mouseleave', () => {
            // Reset position when mouse leaves
            card.style.transform = 'perspective(1000px) scale(1) rotateX(0) rotateY(0)';
        });
    });

    // 3. Radioactive Card Special Effect
    // Adds a dynamic glow that follows the mouse
    const radioactive = document.getElementById('radioactive');
    
    radioactive.addEventListener('mousemove', (e) => {
        const rect = radioactive.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        radioactive.style.background = `radial-gradient(circle at ${x}px ${y}px, #222, #111)`;
    });
});
