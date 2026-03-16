/**
 * Atlas Wealth Management
 * Main JavaScript
 */

(function () {
  'use strict';

  // ─────────────────────────────────────────
  // NAV: Transparent → Solid on scroll
  // ─────────────────────────────────────────
  const nav = document.querySelector('.nav');

  function updateNav() {
    if (!nav) return;
    if (window.scrollY > 60) {
      nav.classList.add('nav--solid');
      nav.classList.remove('nav--transparent');
    } else {
      if (nav.dataset.transparent === 'true') {
        nav.classList.remove('nav--solid');
        nav.classList.add('nav--transparent');
      }
    }
  }

  if (nav) {
    if (nav.dataset.transparent === 'true') {
      nav.classList.add('nav--transparent');
    } else {
      nav.classList.add('nav--solid');
    }
    window.addEventListener('scroll', updateNav, { passive: true });
    updateNav();
  }

  // ─────────────────────────────────────────
  // NAV: Mobile hamburger toggle
  // ─────────────────────────────────────────
  const hamburger  = document.querySelector('.nav__hamburger');
  const mobileNav  = document.querySelector('.nav__mobile');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', function () {
      const isOpen = mobileNav.classList.toggle('is-open');
      hamburger.classList.toggle('is-open', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (!nav.contains(e.target) && mobileNav.classList.contains('is-open')) {
        mobileNav.classList.remove('is-open');
        hamburger.classList.remove('is-open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });

    // Close on nav link click
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileNav.classList.remove('is-open');
        hamburger.classList.remove('is-open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  // ─────────────────────────────────────────
  // MOBILE: Accordion sub-menus
  // ─────────────────────────────────────────
  document.querySelectorAll('.nav__mobile-link[data-toggle]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const targetId = btn.dataset.toggle;
      const sub = document.getElementById(targetId);
      if (!sub) return;
      const isOpen = sub.style.display === 'block';
      sub.style.display = isOpen ? 'none' : 'block';
      btn.dataset.expanded = isOpen ? 'false' : 'true';
    });
  });

  // ─────────────────────────────────────────
  // SCROLL ANIMATIONS (IntersectionObserver)
  // ─────────────────────────────────────────
  const fadeEls = document.querySelectorAll('.fade-up');

  if ('IntersectionObserver' in window && fadeEls.length) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -48px 0px' }
    );

    fadeEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: show all
    fadeEls.forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

  // ─────────────────────────────────────────
  // CONTACT FORM: Basic submission handler
  // ─────────────────────────────────────────
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const btn = contactForm.querySelector('[type="submit"]');
      const originalText = btn.textContent;
      btn.textContent = 'Enviando…';
      btn.disabled = true;

      // Simulate async send
      setTimeout(function () {
        btn.textContent = 'Mensaje enviado';
        btn.style.backgroundColor = '#2A5C3F';
        const successMsg = contactForm.querySelector('.form-success');
        if (successMsg) {
          successMsg.style.display = 'block';
        }
      }, 1200);
    });
  }

  // ─────────────────────────────────────────
  // ACTIVE NAV LINK highlight
  // ─────────────────────────────────────────
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__link, .nav__mobile-link').forEach(function (link) {
    const href = link.getAttribute('href');
    if (href && href === currentPath) {
      link.style.color = 'var(--bronze)';
    }
  });

  // ─────────────────────────────────────────
  // SMOOTH ANCHOR SCROLL (offset for fixed nav)
  // ─────────────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = anchor.getAttribute('href').slice(1);
      if (!targetId) return;
      const target = document.getElementById(targetId);
      if (!target) return;
      e.preventDefault();
      const offset = 90;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

})();
