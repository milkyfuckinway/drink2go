const filter = document.querySelector('.filter');
const slider = filter.querySelector('.range__line');
const maxInput = filter.querySelector('#maxprice');
const minInput = filter.querySelector('#minprice');
const handles = filter.querySelector('noUi-handle');
const MINPRICE = 0;
const MAXPRICE = 1000;
const STEP = 1;

const startRange = {
  lower: 0,
  higher: 900,
};

noUiSlider.create(slider, {
  start: [startRange.lower, startRange.higher],
  connect: true,
  step: STEP,
  range: {
    min: MINPRICE,
    max: MAXPRICE,
  },
  format: {
    to: function (value) {
      return value.toFixed(0);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

const rangeMin = document.querySelector('.noUi-handle-lower');
const rangeMax = document.querySelector('.noUi-handle-upper');

rangeMin.ariaLabel = 'Минимальная цена';
rangeMax.ariaLabel = 'Максимальная цена';

maxprice.value = 9001;

slider.noUiSlider.on('update', () => {
  maxInput.value = slider.noUiSlider.get()[1];
  minInput.value = slider.noUiSlider.get()[0];
});

minInput.value = '';

filter.addEventListener('reset', () => {
  slider.noUiSlider.reset();
});
