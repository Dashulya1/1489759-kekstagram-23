import { fetchPhotos, makeFakeComments } from "./data";
//переменная для блока, куда нужно загружать полноразмерное фото
const elementPicture = document.querySelector('.big-picture');
//переменные для добавления данных по изображениям
const photoAddress = elementPicture.querySelector('.big-picture__photo');
const countLikes = elementPicture.querySelector('.likes-count');
const countComments = elementPicture.querySelector('.comments-count');
const socialComments = elementPicture.querySelector('.social__comments');
const socialMessage = elementPicture.querySelector('social__text');
const socialCaption = elementPicture.querySelector('.social__caption');

function drawFullPhoto(photo) {
  return {
    photoAddress.setAttribute('src', photo.url),
    countLikes.textContent = photo.likes.length,
    countComments.textContent = photo.comments.length,
    socialComments.setAttribute('src', comments.url),
    socialComments.setAttribute('alt', comments.avatar),
    socialMessage.textContent = comments.message,
    socialCaption.textContent = photos.description,
  }
}

export { drawFullPhoto };
