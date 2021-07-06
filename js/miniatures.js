const pictures = document.querySelector('.pictures');
const picture = document.querySelector('#picture').content;

function drawMiniatures(photos) {
  const fragment = document.createDocumentFragment();

  photos.forEach((data) => {
    const photo = picture.cloneNode(true);

    photo.querySelector('.picture__img').setAttribute('src', data.url);
    photo.querySelector('.picture__likes').textContent = data.likes;
    photo.querySelector('.picture__comments').textContent = data.comments.length;

    fragment.appendChild(photo);
  });

  pictures.appendChild(fragment);
}

export { drawMiniatures };
