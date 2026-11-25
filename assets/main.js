document.querySelectorAll('[data-carousel]').forEach((carousel) => {
  const track = carousel.querySelector('.mini-carousel-track');
  const slides = carousel.querySelectorAll('.mini-slide');
  const buttons = carousel.querySelectorAll('.mini-btn');
  const dots = carousel.querySelectorAll('.dot');
  if (!track || !slides.length) return;

  let index = 0;

  const updateDots = (i) => {
    dots.forEach((dot, idx) => {
      dot.classList.toggle('is-active', idx === i);
    });
  };

  const goTo = (nextIndex) => {
    index = (nextIndex + slides.length) % slides.length;
    track.scrollTo({
      left: slides[index].offsetLeft - track.offsetLeft,
      behavior: 'smooth',
    });
    updateDots(index);
  };

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const dir = Number(btn.dataset.dir || 1);
      goTo(index + dir);
    });
  });

  let scrollTimer;
  track.addEventListener('scroll', () => {
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(() => {
      const width = track.clientWidth || 1;
      index = Math.round(track.scrollLeft / width);
      updateDots(Math.min(Math.max(index, 0), slides.length - 1));
    }, 80);
  });

  let autoTimer = setInterval(() => goTo(index + 1), 4500);
  carousel.addEventListener('mouseenter', () => clearInterval(autoTimer));
  carousel.addEventListener('mouseleave', () => {
    clearInterval(autoTimer);
    autoTimer = setInterval(() => goTo(index + 1), 4500);
  });
});
