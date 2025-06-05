document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('overlay');
  const logoContainer = document.querySelector('.overlay-text');

  // Al termine dell’animazione CSS "zoomLogo" su .overlay-text:
  logoContainer.addEventListener('animationend', (event) => {
    // Se l'animazione finita è esattamente "zoomLogo"
    if (event.animationName === 'zoomLogo') {
      overlay.classList.add('fade-out');
      // Dopo che il fade-out (0.7s) è completato, nascosto completely
      setTimeout(() => {
        overlay.style.display = 'none';
      }, 700);
    }
  });
  // Animazione delle sezioni
  const sections = document.querySelectorAll('section[data-anim]');
  sections.forEach((sec, idx) => {
    sec.style.setProperty('--delay', `${0.2 + idx * 0.2}s`);
  });
});

// Toggle nav mobile
function toggleNav() {
  document.getElementById('navLinks').classList.toggle('open');
}
