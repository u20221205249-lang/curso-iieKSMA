/* ============================================================
   Curso Introducción a la Ingeniería Electrónica (IIE)
   Universidad Surcolombiana — Facultad de Ingeniería
   main.js — navegación, acordeones y galería
   ============================================================ */
(function () {
  'use strict';

  /* ---------- 1. Menú móvil ---------- */
  function initMobileNav() {
    var toggle = document.querySelector('.nav-toggle');
    var nav = document.querySelector('.main-nav');
    if (!toggle || !nav) return;

    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    });

    // Cerrar el menú al pasar a escritorio
    window.addEventListener('resize', function () {
      if (window.innerWidth > 860) {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---------- 2. Submenús desplegables ---------- */
  function initDropdowns() {
    var items = document.querySelectorAll('.nav-list > li.has-submenu');

    items.forEach(function (li) {
      var link = li.querySelector('.nav-link');
      var submenu = li.querySelector('.submenu');
      if (!link || !submenu) return;

      link.setAttribute('aria-expanded', 'false');

      function open() {
        closeAll(li);
        li.classList.add('is-open');
        link.classList.add('is-open');
        link.setAttribute('aria-expanded', 'true');
      }
      function close() {
        li.classList.remove('is-open');
        link.classList.remove('is-open');
        link.setAttribute('aria-expanded', 'false');
      }

      // Click / tap: abre el submenú en lugar de navegar
      link.addEventListener('click', function (e) {
        e.preventDefault();
        if (li.classList.contains('is-open')) {
          close();
        } else {
          open();
        }
      });

      // Hover solo en escritorio
      li.addEventListener('mouseenter', function () {
        if (window.innerWidth > 860) open();
      });
      li.addEventListener('mouseleave', function () {
        if (window.innerWidth > 860) close();
      });

      // Teclado: cerrar con Escape
      li.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
          close();
          link.focus();
        }
      });
    });

    function closeAll(except) {
      items.forEach(function (li) {
        if (li === except) return;
        li.classList.remove('is-open');
        var l = li.querySelector('.nav-link');
        if (l) {
          l.classList.remove('is-open');
          l.setAttribute('aria-expanded', 'false');
        }
      });
    }

    // Cerrar al hacer clic fuera del menú
    document.addEventListener('click', function (e) {
      if (!e.target.closest('.nav-list')) closeAll(null);
    });
  }

  /* ---------- 3. Enlace activo según la página ---------- */
  function initActiveLink() {
    var path = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-list > li').forEach(function (li) {
      var links = li.querySelectorAll('a[href]');
      links.forEach(function (a) {
        var href = a.getAttribute('href').split('#')[0];
        if (href && href === path) li.classList.add('current');
      });
    });
  }

  /* ---------- 4. Acordeones ---------- */
  function initAccordions() {
    document.querySelectorAll('.acc-trigger').forEach(function (btn) {
      var panel = btn.nextElementSibling;
      if (!panel) return;

      btn.setAttribute('aria-expanded', 'false');

      btn.addEventListener('click', function () {
        var isOpen = btn.getAttribute('aria-expanded') === 'true';
        if (isOpen) {
          panel.style.maxHeight = null;
          btn.setAttribute('aria-expanded', 'false');
        } else {
          panel.style.maxHeight = panel.scrollHeight + 'px';
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    });

    // Recalcular altura si cambia el ancho de la ventana
    window.addEventListener('resize', function () {
      document.querySelectorAll('.acc-trigger[aria-expanded="true"]').forEach(function (btn) {
        var panel = btn.nextElementSibling;
        if (panel) panel.style.maxHeight = panel.scrollHeight + 'px';
      });
    });

    // Abrir automáticamente si la URL trae un ancla de acordeón
    var hash = window.location.hash;
    if (hash) {
      var target = document.querySelector(hash);
      if (target && target.classList.contains('acc-item')) {
        var trigger = target.querySelector('.acc-trigger');
        if (trigger) trigger.click();
      }
    }
  }

  /* ---------- 5. Galería con lightbox ---------- */
  function initGallery() {
    var links = Array.prototype.slice.call(document.querySelectorAll('[data-lightbox]'));
    if (!links.length) return;

    var box = document.querySelector('.lightbox');
    if (!box) return;

    var img = box.querySelector('img');
    var caption = box.querySelector('.lightbox-caption');
    var btnClose = box.querySelector('.lightbox-close');
    var btnPrev = box.querySelector('.lightbox-prev');
    var btnNext = box.querySelector('.lightbox-next');
    var index = 0;
    var lastFocus = null;

    function show(i) {
      index = (i + links.length) % links.length;
      var link = links[index];
      img.src = link.getAttribute('href');
      img.alt = link.getAttribute('data-caption') || '';
      caption.textContent = link.getAttribute('data-caption') || '';
    }

    function open(i) {
      lastFocus = document.activeElement;
      show(i);
      box.classList.add('is-open');
      box.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      btnClose.focus();
    }

    function close() {
      box.classList.remove('is-open');
      box.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      if (lastFocus) lastFocus.focus();
    }

    links.forEach(function (link, i) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        open(i);
      });
    });

    btnClose.addEventListener('click', close);
    btnPrev.addEventListener('click', function () { show(index - 1); });
    btnNext.addEventListener('click', function () { show(index + 1); });

    box.addEventListener('click', function (e) {
      if (e.target === box) close();
    });

    document.addEventListener('keydown', function (e) {
      if (!box.classList.contains('is-open')) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') show(index - 1);
      if (e.key === 'ArrowRight') show(index + 1);
    });
  }

  /* ---------- 6. Año actual en el pie de página ---------- */
  function initYear() {
    var el = document.querySelector('[data-year]');
    if (el) el.textContent = new Date().getFullYear();
  }

  /* ---------- Arranque ---------- */
  document.addEventListener('DOMContentLoaded', function () {
    initMobileNav();
    initDropdowns();
    initActiveLink();
    initAccordions();
    initGallery();
    initYear();
  });
})();
