export { drawFullPhoto };
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
const commentsCount = document.querySelector('.comments-count');
const COMMENTS_STEP = 5;
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
  });
  // socialComments.appendChild(fragment);

  //вставляет сформированные комментарии в блок socialComments, показывает число загруженных комментариев commentsCounter
  const createComment = (commentsArray) => {
    let commentsCounter = 0;
    const commentsBlockElements = commentsArray.map((comment) => fragment.appendChild(comment));
    socialComments.insertAdjacentHTML('beforeend', commentsBlockElements.join(''));
    commentsCounter += commentsArray.length;
    commentsCount.textContent = commentsCounter;
  };

  //загружает 5 комментариев, если их меньше скрывает кнопку
  const loadComments = () => {
    if (fragment.length <= COMMENTS_STEP) {
      hideCommentsLoader();
    }
    createComment.fragment.slice(0, COMMENTS_STEP);
  };

  //скрывает кнопку загрузки новых комментариев и добавляет обработчик события на кнопку
  const hideCommentsLoader = () => {
    commentsLoader.classList.add('hidden');
    commentsLoader.removeEventListener('click', loadComments);
  };

  //показывает кнопку загрузки новых комментариев и добавляет обработчик события на кнопку
  const showCommentsLoader = () => {
    commentsLoader.classList.remove('hidden');
    commentsLoader.addEventListener('click', loadComments);
  };

  //показывает блок с количеством комментариев и отображает не более COMMENTS_STEP комментариев
  const showCommentsBlock = () => {
    countComments.classList.remove('hidden');
    createComment(fragment.slice(0, COMMENTS_STEP));
  };

  showCommentsBlock();

  ///По количеству коментариев показывается или скрывается блок загрузки новых комментариев
  if (photo.comments.length <= COMMENTS_STEP) {
    hideCommentsLoader();
  } else {
    showCommentsLoader();
  }
}
