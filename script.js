// Nasconde l'overlay dopo un ritardo
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    const overlay = document.getElementById('overlay');
    overlay.classList.add('fade-out');
    // 700 ms corrispondono alla durata della transizione di opacity
    setTimeout(() => { overlay.style.display = 'none'; }, 700);
  }, 2300); // 2.3 secondi di ritardo

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
