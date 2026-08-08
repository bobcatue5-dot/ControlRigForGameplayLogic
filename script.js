
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {threshold: 0.1});

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
window.addEventListener('load', () => {
  document.querySelector('.overview-inner')?.classList.add('visible');
});

document.querySelectorAll('.doc-loop').forEach(video => {
  video.controls = false;
  video.muted = true;
  video.loop = true;
  video.playsInline = true;
  video.setAttribute('tabindex', '-1');
  const keepPlaying = () => video.play().catch(() => {});
  keepPlaying();
  video.addEventListener('pause', keepPlaying);
});
