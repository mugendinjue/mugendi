function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Remove active class from all tabs
    const tabs = document.querySelectorAll('.nav-tab');
    tabs.forEach(tab => {
        tab.classList.remove('active');
        tab.setAttribute('aria-selected', 'false');
    });
    
    // Show selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.add('active');
    }
    
    // Add active class to clicked tab
    const clickedTab = event.target;
    clickedTab.classList.add('active');
    clickedTab.setAttribute('aria-selected', 'true');
}

function toggleContacts() {
    const contactInfo = document.getElementById('contact-info');
    const toggleButton = document.querySelector('.toggle-contacts');
    contactInfo.classList.toggle('active');
    toggleButton.textContent = contactInfo.classList.contains('active') ? '✕' : '☰';
}

// Add smooth scroll behavior and interactive effects
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects to contact items
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(10px)';
        });
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });

    // Add click animation to service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'translateY(-5px)';
            }, 150);
        });
    });

    // Add floating animation to profile image
    const profileImg = document.querySelector('.profile-img');
    let isFloating = false;
    
    setInterval(() => {
        if (!isFloating) {
            profileImg.style.transform = 'translateY(-3px)';
            isFloating = true;
        } else {
            profileImg.style.transform = 'translateY(0)';
            isFloating = false;
        }
    }, 2000);
});