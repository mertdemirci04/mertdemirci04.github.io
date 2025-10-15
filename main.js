document.getElementById('year').textContent = new Date().getFullYear();

    const toggle = document.getElementById('darkToggle');
    const root = document.documentElement;
    const saved = localStorage.getItem('theme');
    if(saved) root.setAttribute('data-theme', saved);

    function updateToggleAria(){
      const mode = root.getAttribute('data-theme') === 'light' ? 'true' : 'false';
      toggle.setAttribute('aria-pressed', (mode === 'true').toString());
      toggle.textContent = (mode === 'true') ? '🌞' : '🌙';
    }
    updateToggleAria();

    toggle.addEventListener('click', ()=>{
      if(root.getAttribute('data-theme') === 'light'){
        root.removeAttribute('data-theme');
        localStorage.removeItem('theme');
      } else {
        root.setAttribute('data-theme','light');
        localStorage.setItem('theme','light');
      }
      updateToggleAria();
    });

    function showEmail(){
      alert('E-posta: ornek@mail.com');
    }

    const io = new IntersectionObserver((entries) => {
      entries.forEach(ent => {
        if(ent.isIntersecting){
          ent.target.classList.add('reveal');
          io.unobserve(ent.target);
        }
      });
    }, {threshold: 0.12});

    document.querySelectorAll('.hide-on-load').forEach(el => io.observe(el));
    document.querySelectorAll('.card, .project, .cert, .skill, .blog-grid > *').forEach(el => io.observe(el));


    document.querySelectorAll('.project a').forEach(a=>{
      a.addEventListener('click', ()=>{/* track if needed */});
    });

    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if(mq.matches){
      document.querySelectorAll('.project, .cert, .skill .progress').forEach(el=>{
        el.style.transition = 'none';
      });
    }
window.addEventListener('DOMContentLoaded', () => {
  const progressEls = document.querySelectorAll('.progress');
  progressEls.forEach(p => {
    const originalWidth = p.style.width;
    p.dataset.targetWidth = originalWidth;
    p.style.width = '0'; 

    const obs = new IntersectionObserver((entries, o) => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          p.style.transition = 'width 1.2s ease';
          p.style.width = p.dataset.targetWidth;
          o.unobserve(p);
        }
      });
    }, { threshold: 0.3 });

    obs.observe(p.closest('.skill'));
  });
});

// === Reveal efekti ===
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  const revealPoint = 100;

  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < windowHeight - revealPoint) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // sayfa yüklenince de uygula

// === Marquee hover durdurma ===
const track = document.querySelector(".projects-track");
const marquee = document.querySelector(".marquee");

marquee.addEventListener("mouseenter", () => {
  track.style.animationPlayState = "paused";
});

marquee.addEventListener("mouseleave", () => {
  track.style.animationPlayState = "running";
});
