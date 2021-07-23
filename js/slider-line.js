
const imageEditor = document.querySelector('.img-upload__overlay');
const scalePanel = imageEditor.querySelector('.effect-level');
const effectValue = scalePanel.querySelector('.effect-level__value');
const scaleLine = scalePanel.querySelector('.effect-level__slider');
const defaultValue = document.querySelector('#effect-none');
const previewPicture = imageEditor.querySelector('.img-upload__preview > img');
const effectsRadioButtons = document.querySelectorAll('.effects__radio');

//переменная для текущего значения эффекта
let currentPictureClass;
//Присваевает класс изображению в зависимости от выбранного эффекта
const setClass = (effect) => {
  if (currentPictureClass) {
    previewPicture.classList.remove(currentPictureClass);
  }
  previewPicture.classList.add(`effects__preview--${effect}`);
  currentPictureClass = `effects__preview--${effect}`;
};


noUiSlider.create(scaleLine, {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
  connect: 'lower',
});

scaleLine.noUiSlider.on('update', (_, handle, unencoded) => {
  effectValue.value = unencoded[handle];
});

const onEffectClick = scaleLine.addEventListener('change', (evt) => {
  if (evt.target.max === 100) {
    scaleLine.noUiSlider.updateOptions ({
      range: {
        min: 0,
        max: 100,
      },
      start: 100,
      step: 1,
    });
  } else if (evt.target.max === 1) {
    scaleLine.noUiSlider.updateOptions ({
      range: {
        min: 0,
        max: 1,
      },
      step: 0.1,
    });
    scaleLine.noUiSlider.set(1);
  } else if (evt.target.max === 3) {
    scaleLine.noUiSlider.updateOptions ({
      range: {
        min: 0,
        max: 3,
      },
      step: 0.1,
    });
    scaleLine.noUiSlider.set(3);
  } else if (evt.target.id === defaultValue) {
    scaleLine.disabled;
  }
});

export const initialize = () => {
  Array.from(effectsRadioButtons).forEach((effect) =>
    effect.addEventListener('click', onEffectClick));
  defaultValue.checked = true;
  setClass(defaultValue.value);
  scaleLine.noUiSlider.destroy();
};
