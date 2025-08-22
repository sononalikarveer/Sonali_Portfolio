document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('.cyber-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
    
    // Scroll to top button
    const scrollToTop = document.createElement('div');
    scrollToTop.className = 'scroll-to-top';
    scrollToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(scrollToTop);
    
    scrollToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTop.style.opacity = '1';
            scrollToTop.style.visibility = 'visible';
        } else {
            scrollToTop.style.opacity = '0';
            scrollToTop.style.visibility = 'hidden';
        }
    });
    
    // Form submission
    const messageForm = document.getElementById('messageForm');
    if (messageForm) {
        messageForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Here you would typically send the data to a server
            console.log('Form submitted:', data);
            
            // Show success message
            alert('Message sent successfully!');
            this.reset();
        });
    }
    

    // Add glitch effect to elements with glitch class
    document.querySelectorAll('.glitch').forEach(el => {
        el.addEventListener('mouseenter', function() {
            this.classList.add('glitch-active');
        });
        
        el.addEventListener('mouseleave', function() {
            this.classList.remove('glitch-active');
        });
    });
    
    // Add typing effect to hero subtitle
    const subtitle = document.querySelector('.cyber-subtitle');
    if (subtitle) {
        const fullText = subtitle.textContent.replace('// ', '');
        subtitle.textContent = '// ';
        
        let i = 0;
        const typingEffect = setInterval(() => {
            if (i < fullText.length) {
                subtitle.textContent += fullText.charAt(i);
                i++;
            } else {
                clearInterval(typingEffect);
            }
        }, 50);
    }
    
    // Add particle effect to project cards on hover
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            const particles = document.createElement('div');
            particles.className = 'particles';
            this.appendChild(particles);
            
            setTimeout(() => {
                particles.remove();
            }, 1000);
        });
    });
    
    // Add console-like effect to terminal elements
    document.querySelectorAll('.terminal-effect').forEach(el => {
        const text = el.textContent;
        el.textContent = '';
        
        let i = 0;
        const terminalTyping = setInterval(() => {
            if (i < text.length) {
                el.textContent += text.charAt(i);
                i++;
                el.scrollTop = el.scrollHeight;
            } else {
                clearInterval(terminalTyping);
            }
        }, 20);
    });
});

// Add window load event for additional effects
window.addEventListener('load', function() {
    // Add animation class to sections for scroll effects
    const sections = document.querySelectorAll('.cyber-section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, {
        threshold: 0.1
    });
    
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Add random glitch effect to header
    setInterval(() => {
        const header = document.querySelector('.cyber-header');
        if (Math.random() > 0.7) {
            header.classList.add('glitch-effect');
            setTimeout(() => {
                header.classList.remove('glitch-effect');
            }, 200);
        }
    }, 5000);
});

// Add custom cursor effect
document.addEventListener('mousemove', function(e) {
    const cursor = document.querySelector('.custom-cursor');
    if (cursor) {
        cursor.style.left = e.pageX + 'px';
        cursor.style.top = e.pageY + 'px';
    }
});

// Create custom cursor if not exists
if (!document.querySelector('.custom-cursor')) {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);
    
    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .project-card, .cyber-link');
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('cursor-hover');
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('cursor-hover');
        });
    });
}
