const burger = document.getElementById('burger');
  const navLinks = document.getElementById('navLinks');
  burger.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    burger.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open);
  });
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    navLinks.classList.remove('open'); burger.classList.remove('open'); burger.setAttribute('aria-expanded','false');
  }));

  // Doctor tabs
  document.querySelectorAll('.doc-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.doc-tab').forEach(t => t.setAttribute('aria-selected','false'));
      tab.setAttribute('aria-selected','true');
      const id = tab.dataset.doc;
      document.querySelectorAll('.doc-panel').forEach(p => p.hidden = p.dataset.panel !== id);
    });
  });

  // Slots
  document.querySelectorAll('.slot:not(.busy)').forEach(s => {
    s.addEventListener('click', () => {
      document.querySelectorAll('.slot').forEach(x => x.classList.remove('selected'));
      s.classList.add('selected');
    });
  });

  // Booking form
  document.getElementById('bookingForm').addEventListener('submit', e => {
    e.preventDefault();
    document.getElementById('confirmMsg').classList.add('show');
  });

  // FAQ accordion
  document.querySelectorAll('.faq-item').forEach(item => {
    item.querySelector('.faq-q').addEventListener('click', () => {
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });
