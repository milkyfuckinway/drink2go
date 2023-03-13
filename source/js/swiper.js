const nextButton = document.querySelector('.swiper-button--next');
const prevButton = document.querySelector('.swiper-button--prev');
const pagination = document.querySelector('.swiper-pagination');

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

  navigation: {
    nextEl: nextButton,
    prevEl: prevButton,
  },

  pagination: {
    el: pagination,
    clickable: true,
  },
});

prevButton.ariaLabel = 'Предыдущий слайд.';
nextButton.ariaLabel = 'Следующий слайд.';

const bullets = pagination.children;

for (let i = 0; i < bullets.length; i++) {
  bullets[i].ariaLabel = `Перейти к слайду номер ${i + 1}.`;
}
