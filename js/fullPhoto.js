//переменная для блока, куда нужно загружать полноразмерное фото
const elementPicture = document.querySelector('.big-picture');
//переменные для добавления данных по изображениям
const photoAddress = elementPicture.querySelector('.big-picture__photo');
const countLikes = elementPicture.querySelector('.likes-count');
const countComments = elementPicture.querySelector('.comments-count');
const socialComments = elementPicture.querySelector('.social__comments');
const socialComment = socialComments.querySelector('.social__comment');
const socialCaption = elementPicture.querySelector('.social__caption');
const socialCommentsCount = elementPicture.querySelector('.social__comment-count');
const commentsLoader = elementPicture.querySelector('.comments-loader');
const pictureCancel = document.querySelector('#picture-cancel');

const ESC_KEYCODE = 27;

function openWindow() {
  elementPicture.classList.remove('hidden');
  socialCommentsCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  document.body.classList.add('modal-open');

  pictureCancel.addEventListener('click', closeWindow);
  document.addEventListener('keydown', handleEscKeyDown);
}

function closeWindow() {
  elementPicture.classList.add('hidden');
  socialCommentsCount.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');
  document.body.classList.remove('modal-open');

  pictureCancel.removeEventListener('click', closeWindow);
  document.removeEventListener('keydown', handleEscKeyDown);
}

function handleEscKeyDown(evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closeWindow();
  }
}

function drawFullPhoto(photo) {
  openWindow();

  photoAddress.setAttribute('src', photo.url);
  photoAddress.setAttribute('alt', photo.description);
  countLikes.textContent = photo.likes;
  countComments.textContent = photo.comments.length;
  socialCaption.textContent = photo.description;

  const fragment = document.createDocumentFragment();

  photo.comments.forEach((data) => {
    const comment = socialComment.cloneNode(true);
    const avatar = comment.querySelector('.social__picture');
    const text = comment.querySelector('.social__text');

    avatar.setAttribute('src', data.avatar);
    avatar.setAttribute('alt', data.name);
    text.textContent = data.message;

    fragment.appendChild(comment);
  });

  socialComments.appendChild(fragment);
}

export { drawFullPhoto };
