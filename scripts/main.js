/**
 * RFL PRO — Main JavaScript
 * Handles interactivity: mobile menu, FAQ accordion, scroll reveal
 */

(function() {
  'use strict';

  // Enable JS-dependent animations
  document.documentElement.classList.add('js-enabled');

  // ─────────────────────────────────────────────────────────────────────────
  // Mobile Navigation
  // ─────────────────────────────────────────────────────────────────────────
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav__link');

  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileNav.classList.toggle('active');
      mobileMenuBtn.classList.toggle('active');

      // Animate hamburger to X
      const spans = mobileMenuBtn.querySelectorAll('span');
      if (mobileNav.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
        spans[0].style.transform = '';
        spans[1].style.opacity = '1';
        spans[2].style.transform = '';
      }
    });

    // Close mobile nav when clicking a link
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
        const spans = mobileMenuBtn.querySelectorAll('span');
        spans[0].style.transform = '';
        spans[1].style.opacity = '1';
        spans[2].style.transform = '';
      });
    });
  }

  // ─────────────────────────────────────────────────────────────────────────
  // FAQ Accordion
  // ─────────────────────────────────────────────────────────────────────────
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-item__question');

    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all other items
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
      });

      // Toggle current item
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // ─────────────────────────────────────────────────────────────────────────
  // Scroll Reveal Animation
  // ─────────────────────────────────────────────────────────────────────────
  const revealElements = document.querySelectorAll('.reveal');

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const revealPoint = 100;

    revealElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;

      if (elementTop < windowHeight - revealPoint) {
        element.classList.add('visible');
      }
    });
  };

  // Initial check - run immediately and after a short delay for DOM readiness
  revealOnScroll();
  setTimeout(revealOnScroll, 100);

  // Check on scroll
  window.addEventListener('scroll', revealOnScroll, { passive: true });

  // Also check on load
  window.addEventListener('load', revealOnScroll);

  // ─────────────────────────────────────────────────────────────────────────
  // Smooth Scroll for Anchor Links
  // ─────────────────────────────────────────────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');

      // Skip if it's just "#"
      if (href === '#') return;

      const target = document.querySelector(href);

      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // ─────────────────────────────────────────────────────────────────────────
  // Header Background on Scroll
  // ─────────────────────────────────────────────────────────────────────────
  const header = document.querySelector('.header');

  if (header) {
    const updateHeaderBackground = () => {
      if (window.scrollY > 50) {
        header.style.background = 'rgba(5, 5, 7, 0.95)';
      } else {
        header.style.background = 'rgba(5, 5, 7, 0.8)';
      }
    };

    window.addEventListener('scroll', updateHeaderBackground, { passive: true });
    updateHeaderBackground();
  }

  // ─────────────────────────────────────────────────────────────────────────
  // Staggered Animation for Grid Items
  // ─────────────────────────────────────────────────────────────────────────
  const animateGridItems = () => {
    const grids = document.querySelectorAll('.features__grid, .stats__grid, .steps');

    grids.forEach(grid => {
      const items = grid.querySelectorAll('.reveal');
      items.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.1}s`;
      });
    });
  };

  animateGridItems();

})();
