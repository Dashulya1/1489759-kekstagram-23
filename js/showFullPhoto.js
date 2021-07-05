//отрисовка полноразмерного изображения
import {createMiniature} from './data';
//переменная для блока, куда нужно загружать полноразмерное фото
const elementPicture = document.querySelector('.big-picture');
const counterComments = document.querySelector('.social__comment-count');
const loaderComments = document.querySelector('.comments-loader');

//функция, формирующая блок с полноразмерной фотографией
elementPicture.addEventListener ('click', () => {
  //удалим сокрытие блока с фото
  const showPicture = elementPicture.classList.remove('hidden');
  //скрываю счетчик комментариев и загрузку новых комментариев
  counterComments.classList.add('hidden');
  loaderComments.classList.add('hidden');
  document.body.classList.add('modal-open');
  //переменные для добавления данных по изображениям
  const photoAddress = showPicture.querySelector('.big-picture__img');
  const countLikes = showPicture.querySelector('.likes-count');
  const countComments = showPicture.querySelector('.comments-count');

  //заменяем url у .big-picture__img
  photoAddress.setAttribute('src', createMiniature.url);
  //Количество лайков likes подставьте как текстовое содержание элемента .likes-count
  countLikes.textContent = createMiniature.likes.length;
  //Количество комментариев comments подставьте как текстовое содержание элемента .comments-count
  countComments.textContent = createMiniature.commentsAmount.length;
});

//Описание фотографии description вставляю строкой в блок .social__caption
const description = document.querySelector('.social__caption');
description.textContent = createMiniature.description;

//закрытие модального окна
const buttonFullPhotoClose = document.querySelector('.big-picture__cancel');

//заркытие по клику на крестик
buttonFullPhotoClose.addEventListener('click', () => {
  elementPicture.classList.add('hidden');
});

//закрытие по нажатию кнопки esc
buttonFullPhotoClose.addEventListener('keydown', (_evt) => {
  if (_evt.keyCode === 27) {
    elementPicture.classList.add('hidden');
  }
});
