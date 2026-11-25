document.querySelectorAll('.category-block').forEach((block) => {
  const track = block.querySelector('.carousel-track');
  const buttons = block.querySelectorAll('.carousel-btn');
  if (!track || !buttons.length) return;

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const dir = Number(btn.dataset.dir || 1);
      track.scrollBy({ left: dir * 340, behavior: 'smooth' });
    });
  });
});
