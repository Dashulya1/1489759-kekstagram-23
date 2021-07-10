const hashtagInput = document.querySelector('.text__hashtags');
const textOfComment = document.querySelector('.text__description');

const hashtagValidation = function (evt) {
  const hashtagsArray = hashtagInput.value.split(' ');

  if (hashtagsArray.lenght > 5) {
    evt.target.setCustomValidity('Можно ввести не более 5 хэштегов');
  }

  hashtagsArray.forEach((hashtag) => {
    const regularExpression = /^#[A-Za-zА-Яа-я0-9]{1,19}$/;

    if (!regularExpression.test(hashtag)) {
      evt.target.setCustomValidity('Хэштег начинается с #, может содержать только буквы и цифры и разделяется только пробелом');
    }

    if (hashtag.includes('#', 1)) {
      evt.target.setCustomValidity('Хэштэг должен содержать только один #');
    }
  });

  for (let i = 0; i < hashtagsArray.lenght; i++) {
    let hash = hashtagsArray[i];
    let switchHash = hashtagsArray[i + 1];

    if (!hash.target.toLowerCase() === switchHash.target.toLowerCase()) {
      hash = hashtagsArray[i + 1];
      switchHash = hashtagsArray[i];
    } else {
      evt.target.setCustomValidity('Хэштеги не должны повторяться');
    }
  }
};

hashtagInput.addEventListener ('change', hashtagValidation);

//валидация комментария
const commentValidation = function (evt) {
  const commentLenght = textOfComment.value.lenght;
  const MIN_LENGHT = 2;
  const MAX_LENGHT = 140;

  if (commentLenght < MIN_LENGHT) {
    // evt.target.setCustomValidity(`Ещё ${MIN_LENGTH - commentLength} символов`);
  } else if (commentLenght > MAX_LENGHT) {
    evt.target.setCustomValidity(`Превышение на ${MAX_LENGHT - commentLenght} символов`);
  } else {
    evt.target.setCustomValidity = '';
  }
};

textOfComment.addEventListener('input', commentValidation);
