export {scaleChange};
function scaleChange (image) {
  const STEP = 25;
  const MAX_VALUE = 100;
  const RADIX = 10;

  const scale = document.querySelector('.scale');
  const btnMinus = scale.querySelector('.scale__control--smaller');
  const btnPlus = scale.querySelector('scale__control--bigger');
  const scaleValue = scale.querySelector('.scale__control--value');

  scaleValue.value = '100%';
  const parsed = Number(scaleValue.value, RADIX);

  const changeImgScale = function () {
    image.style.transform = `scale(${  parsed / MAX_VALUE  })`;
  };

  const decrease = function () {
    if ( parsed < MAX_VALUE ) {
      scaleValue.value = `${parsed - STEP}%`;
      changeImgScale(scaleValue.value);
    }
  };
  const increase = function () {
    if (parsed < MAX_VALUE ) {
      scaleValue.value = `${parsed + STEP  }%`;
      changeImgScale(scaleValue.value);
    }
  };

  btnMinus.addEventListener('click', decrease());
  btnPlus.addEventListener('click', increase());
}
