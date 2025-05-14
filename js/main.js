document.addEventListener('DOMContentLoaded', function() {
    // Set active navigation link based on current page
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage || 
            (currentPage === '' && linkHref === 'index.html') ||
            (window.location.pathname.endsWith('/') && linkHref === 'index.html')) {
            link.classList.add('active');
        }
    });
    
    // Animation for elements with fade-in class
    const fadeElements = document.querySelectorAll('.fade-in');
    
    // Check if IntersectionObserver is supported
    if ('IntersectionObserver' in window) {
        const fadeObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    fadeObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });
        
        fadeElements.forEach(element => {
            fadeObserver.observe(element);
        });
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        fadeElements.forEach(element => {
            element.classList.add('visible');
        });
    }
    
    // Add hover animations to cards and buttons
    const animateElements = document.querySelectorAll('.highlight-item, .featured-item, .project-card, .btn');
    
    animateElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.15)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });
    
    // Dark mode toggle functionality - Apply this as early as possible to avoid flash of incorrect theme
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const savedTheme = localStorage.getItem('theme');
    
    // Set the initial theme immediately
    if (savedTheme === 'dark' || (!savedTheme && prefersDarkScheme.matches)) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
    
    // Then update the button once DOM is loaded
    const themeToggle = document.querySelector('.theme-toggle');
    
    // Update the toggle icon
    if (themeToggle) {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        themeToggle.innerHTML = currentTheme === 'dark' 
            ? '<i class="fas fa-sun"></i>'
            : '<i class="fas fa-moon"></i>';
    }
    
    // Toggle theme when button is clicked
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            let newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            
            // Update icon
            themeToggle.innerHTML = newTheme === 'dark' 
                ? '<i class="fas fa-sun"></i>' 
                : '<i class="fas fa-moon"></i>';
        });
    }
    
    // Resume download functionality
    const resumeBtn = document.querySelector('.resume-download');
    if (resumeBtn) {
        resumeBtn.addEventListener('click', function() {
            // Create download animation
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Downloading...';
            
            // Simulate download delay
            setTimeout(() => {
                // In a real scenario, you would have an actual file to download
                // For now, we'll just update the button text as if it succeeded
                this.innerHTML = '<i class="fas fa-check"></i> Downloaded!';
                
                // Reset after 2 seconds
                setTimeout(() => {
                    this.innerHTML = '<i class="fas fa-download"></i> Download Resume';
                }, 2000);
                
                // For demonstration - in a real scenario you would trigger a download
                // window.location.href = 'path/to/Owen_Wright_Resume.pdf';
            }, 1500);
        });
    }
});