const PHOTOS_LIMIT = 25;
const PHOTO_COMMENTS_LIMIT = 135;
// const NAMES = [
//   'Саша',
//   'Виолетта',
//   'Катя',
//   'Полли',
//   'Жора',
//   'Паша',
//   'Андрей',
//   'Ноэль',
//   'Костя',
// ];
// const MESSAGE = [
//   'Всё отлично!',
//   'В целом всё неплохо. Но не всё.',
//   'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
//   'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
//   'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
//   'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
// ];
// const DESCRIPTIONS = [
//   'Выходные Кекса',
//   'Сегодня на дессерт сметанка',
//   'Вид из окна как всегда шикарный',
//   'Рыбка сегодня особенно прекрасна',
//   'Как же хочется поспать',
// ];

function makeFakeComment() {
  return {
    id: null,
    avatar: null,
    message: null,
    name: null,
  };
}

function makeFakeComments() {
  const comments = [];

  for (let i = 0; i < PHOTO_COMMENTS_LIMIT; i++) {
    comments.push(makeFakeComment());
  }

  return comments;
}

function makeFakePhoto() {
  return {
    id: null,
    url: 'photos/1.jpg',
    description: null,
    likes: 555,
    comments: makeFakeComments(),
  };
}

// https://up.htmlacademy.ru/javascript/23/check/tasks/1489759/8
function fetchPhotos() {
  const photos = [];

  for (let i = 0; i < PHOTOS_LIMIT; i++) {
    photos.push(makeFakePhoto());
  }

  return photos;
}

export { fetchPhotos, makeFakeComments };

// import {randomInteger} from './utils.js';
// import {idReady} from './idReady.js';
// import {idNum} from './idNum.js';
// const commentDesc = function() {
//   return {
//     id: idReady(idNum),
//     avatar: `img/avatar-${randomInteger(0, 5)}.svg`,
//     message: MESSAGETEXT[randomInteger(0, MESSAGETEXT.length - 1)],
//     nameUser: NAMES[randomInteger(0, NAMES.length - 1)],
//   };
// };
//
// const comments = new Array(135).fill(null);
//
// comments.forEach (commentDesc());
//
// const createPhotoDescription = function() {
//   return {
//     id: idNum[randomInteger(0, 5)],
//     url: `photos/${idReady(idNum)}.jpg`,
//     description: description[randomInteger(0, description.length - 1)],
//     likes: idNum[randomInteger(15, 200)],
//     comments: comments[randomInteger(0, MESSAGETEXT.length - 1)],
//   };
// };
//
// const createMiniature = () => new Array(5).fill(null).map(() => createPhotoDescription());
//
// export {createMiniature};
// export {comments};
