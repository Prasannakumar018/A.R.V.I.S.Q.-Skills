/**
 * A.R.V.I.S.Q.-Skills - Main JavaScript
 */

// ==========================================
// Counter Animation for Hero Stats
// ==========================================
function animateCounters() {
  const counters = document.querySelectorAll('.stat-number');

  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-count'));
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps
    let current = 0;

    const updateCounter = () => {
      current += increment;
      if (current < target) {
        counter.textContent = Math.floor(current);
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target;
      }
    };

    updateCounter();
  });
}

// ==========================================
// Smooth Scroll with Offset for Fixed Nav
// ==========================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;

      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const navHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = target.offsetTop - navHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// ==========================================
// Active Nav Link on Scroll
// ==========================================
function updateActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
}

// ==========================================
// Copy to Clipboard for Package Install Commands
// ==========================================
function initCopyButtons() {
  const copyButtons = document.querySelectorAll('.copy-btn');

  copyButtons.forEach(button => {
    button.addEventListener('click', function() {
      const textToCopy = this.getAttribute('data-clipboard');

      // Create temporary textarea
      const textarea = document.createElement('textarea');
      textarea.value = textToCopy;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);

      // Select and copy
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);

      // Visual feedback
      const originalHTML = this.innerHTML;
      this.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      `;
      this.style.background = 'var(--secondary)';
      this.style.color = 'white';
      this.style.borderColor = 'var(--secondary)';

      setTimeout(() => {
        this.innerHTML = originalHTML;
        this.style.background = '';
        this.style.color = '';
        this.style.borderColor = '';
      }, 2000);
    });
  });
}

// ==========================================
// Mobile Menu Toggle
// ==========================================
function initMobileMenu() {
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      menuToggle.classList.toggle('active');
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
      });
    });
  }
}

// ==========================================
// Intersection Observer for Fade-In Animations
// ==========================================
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe skill cards, tool cards, and package cards
  document.querySelectorAll('.skill-card, .tool-card, .package-card').forEach(card => {
    observer.observe(card);
  });
}

// ==========================================
// Search Functionality (Placeholder)
// ==========================================
function initSearch() {
  // This would be implemented with a search input in the nav
  // For now, it's a placeholder for future enhancement
  console.log('Search functionality will be implemented in Phase 2');
}

// ==========================================
// Dark Mode Toggle (Respects System Preference)
// ==========================================
function initDarkMode() {
  // Check for saved preference or system preference
  const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  // Listen for changes in system preference
  darkModeMediaQuery.addEventListener('change', (e) => {
    if (e.matches) {
      console.log('Dark mode enabled');
    } else {
      console.log('Light mode enabled');
    }
  });
}

// ==========================================
// Navbar Scroll Effect
// ==========================================
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Add shadow on scroll
    if (currentScroll > 50) {
      navbar.style.boxShadow = 'var(--shadow-md)';
    } else {
      navbar.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
  });
}

// ==========================================
// Initialize All Functions on DOM Load
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  // Initialize all features
  initSmoothScroll();
  updateActiveNavLink();
  initCopyButtons();
  initMobileMenu();
  initScrollAnimations();
  initDarkMode();
  initNavbarScroll();

  // Animate counters when hero section is in view
  const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounters();
        heroObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  const heroSection = document.querySelector('.hero');
  if (heroSection) {
    heroObserver.observe(heroSection);
  }

  console.log('A.R.V.I.S.Q.-Skills initialized');
});

// ==========================================
// External API Functions (for future use)
// ==========================================

/**
 * Fetch package statistics from GitHub API
 * @param {string} owner - GitHub username
 * @param {string} repo - Repository name
 */
async function fetchGitHubStats(owner, repo) {
  try {
    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
    const data = await response.json();

    return {
      stars: data.stargazers_count,
      forks: data.forks_count,
      watchers: data.watchers_count,
      openIssues: data.open_issues_count
    };
  } catch (error) {
    console.error('Error fetching GitHub stats:', error);
    return null;
  }
}

/**
 * Load skills data from JSON
 * @param {string} category - Skill category (owasp-top-10, owasp-llm-top-10, api-security)
 */
async function loadSkillsData(category) {
  try {
    const response = await fetch(`assets/data/${category}.json`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error loading skills data for ${category}:`, error);
    return null;
  }
}

/**
 * Search skills, tools, and packages
 * @param {string} query - Search query
 */
function search(query) {
  // This would implement fuzzy search across all content
  // For now, it's a placeholder
  console.log(`Searching for: ${query}`);
  // Implementation would go here
}

// ==========================================
// Export functions for external use
// ==========================================
window.ARVISQSkills = {
  search,
  fetchGitHubStats,
  loadSkillsData
};
