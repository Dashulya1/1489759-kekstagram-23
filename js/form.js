// Загрузка нового изображения:
// выбор файла с изображением для загрузки;
// изменение масштаба изображения;
// применение одного из заранее заготовленных эффектов;
// выбор глубины эффекта с помощью ползунка;
// добавление текстового комментария;
// добавление хэш-тегов.
const formWindow = document.querySelector('.img-upload__overlay');
const uploadPhoto = document.querySelector('.img-upload__photo');
const uploadFile = document.querySelector('#upload-file');
const ESCKEY = 27;

function openEditor () {
  formWindow.classList.remove('hidden');
  document.body.classList.add('modal-open');

  uploadPhoto.addEventListener('click', closeEditor);
  document.addEventListener('keydown', pushEscKeydown);
}

function closeEditor () {
  uploadFile.value = '';
  formWindow.classList.add('hidden');
  document.body.classList.remove('modal-open');

  uploadPhoto.removeEventListener('click', closeEditor);
  document.removeEventListener('keydown', pushEscKeydown);
}

function pushEscKeydown(evt) {
  if (evt.keyCode === ESCKEY) {
    closeEditor();
  }
}

const uploadForm = function () {
  openEditor();
  // changeScale();
  // imposeAnEffect();
  // effectDepth();
  // addComment();
  // addHashTags();
};

uploadFile.addEventListener('change', uploadForm);
