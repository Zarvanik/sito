const INTRO_FLAG = 'mirbolIntroShown';

window.addEventListener('load', () => {
  const overlay = document.getElementById('overlay');
  const logoContainer = document.querySelector('.overlay-text');

  // Se la chiave è già in sessionStorage → salto l’overlay
  if (sessionStorage.getItem(INTRO_FLAG) === 'true') {
    overlay.style.display = 'none';
    return;
  }

  // Altrimenti aspetto la fine dello zoom per nascondere e settare la chiave
  logoContainer.addEventListener('animationend', event => {
    if (event.animationName === 'zoomLogo') {
      overlay.classList.add('fade-out');
      setTimeout(() => {
        overlay.style.display = 'none';
      }, 700);
      sessionStorage.setItem(INTRO_FLAG, 'true');
    }
  });

  // Mantengo il delay delle sezioni come prima
  const sections = document.querySelectorAll('section[data-anim]');
  sections.forEach((sec, idx) => {
    sec.style.setProperty('--delay', `${0.2 + idx * 0.2}s`);
  });
});

function toggleNav() {
  document.getElementById('navLinks').classList.toggle('open');
}
