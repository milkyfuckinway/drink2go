const dropdown = document.querySelector('.dropdown');
const dropdownButton = dropdown.querySelector('.dropdown__button');
const dropdownList = dropdown.querySelector('.dropdown__list');
const dropdownItemList = dropdownList.querySelectorAll('.dropdown__item');
const dropdownArrow = dropdownButton.querySelector('.dropdown__arrow');
const dropdownSelected = dropdown.querySelector('.dropdown__selected');
let dropdownIndexCounter = 0;

const currentSelected = () => {
  dropdownItemList[dropdownIndexCounter].classList.add('dropdown__item--current');
};

currentSelected();

const onEscDown = (evt) => {
  if (evt.key === 'Escape') {
    dropdownVisiblyHandler();
  }
};

const onClickAway = (evt) => {
  if (!evt.target.closest('.dropdown')) {
    dropdownVisiblyHandler();
  }
};

const onArrowDown = (evt) => {
  if (evt.key === 'ArrowDown') {
    evt.preventDefault();
    if (dropdownIndexCounter >= 0 && dropdownIndexCounter < dropdownItemList.length - 1) {
      dropdownItemList[dropdownIndexCounter + 1].classList.add('dropdown__item--focus');
      dropdownItemList[dropdownIndexCounter].classList.remove('dropdown__item--focus');
      dropdownIndexCounter += 1;
    }
  }
};

const onArrowUp = (evt) => {
  if (evt.key === 'ArrowUp') {
    evt.preventDefault();
    if (dropdownIndexCounter <= dropdownItemList.length - 1 && dropdownIndexCounter !== 0) {
      dropdownItemList[dropdownIndexCounter - 1].classList.add('dropdown__item--focus');
      dropdownItemList[dropdownIndexCounter].classList.remove('dropdown__item--focus');
      dropdownIndexCounter -= 1;
    }
  }
};

const onTabWhenOpen = (evt) => {
  if (evt.key === 'Tab') {
    dropdownVisiblyHandler();
  }
};

const changeDropdownPlaceholder = (item) => {
  dropdownSelected.textContent = item.textContent;
};

const onKeySelect = (evt) => {
  if (evt.key === 'Enter' || evt.key === ' ') {
    evt.preventDefault();
    if (!dropdownList.classList.contains('dropdown__list--hidden')) {
      dropdownVisiblyHandler();
    }
    dropdownItemList.forEach((item) => {
      if (item.classList.contains('dropdown__item--current')) {
        item.classList.remove('dropdown__item--current');
      }
      dropdownItemList[dropdownIndexCounter].classList.add('dropdown__item--current');
      changeDropdownPlaceholder(dropdownItemList[dropdownIndexCounter]);
    });
  }
};

function dropdownVisiblyHandler() {
  if (dropdownList.classList.contains('dropdown__list--hidden')) {
    dropdownList.classList.remove('dropdown__list--hidden');
    document.addEventListener('keydown', onEscDown);
    document.addEventListener('click', onClickAway);
    document.addEventListener('keydown', onArrowDown);
    document.addEventListener('keydown', onArrowUp);
    document.addEventListener('keydown', onTabWhenOpen);
    document.addEventListener('keydown', onKeySelect);
    dropdownArrow.classList.add('dropdown__arrow--active');
  } else {
    dropdownList.classList.add('dropdown__list--hidden');
    document.removeEventListener('keydown', onEscDown);
    document.removeEventListener('click', onClickAway);
    document.removeEventListener('keydown', onArrowDown);
    document.removeEventListener('keydown', onArrowUp);
    document.removeEventListener('keydown', onTabWhenOpen);
    document.removeEventListener('keydown', onKeySelect);
    dropdownArrow.classList.remove('dropdown__arrow--active');
  }
}

dropdownButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  dropdownVisiblyHandler();
});

dropdownItemList.forEach((item) => {
  item.addEventListener('click', () => {
    changeDropdownPlaceholder(item);
    dropdownItemList.forEach((elem) => {
      if (elem.classList.contains('dropdown__item--current')) {
        elem.classList.remove('dropdown__item--current');
      }
    });
    item.classList.add('dropdown__item--current');
    dropdownIndexCounter = Number(item.dataset.index);
    dropdownVisiblyHandler();
  });
});
