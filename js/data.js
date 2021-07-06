import { randomInteger } from '/js/utils.js';

const PHOTOS_LIMIT = 25;
const PHOTO_COMMENTS_LIMIT = 135;
const NAMES = [
  'Саша',
  'Виолетта',
  'Катя',
  'Полли',
  'Жора',
  'Паша',
  'Андрей',
  'Ноэль',
  'Костя',
];
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const DESCRIPTIONS = [
  'Выходные Кекса',
  'Сегодня на дессерт сметанка',
  'Вид из окна как всегда шикарный',
  'Рыбка сегодня особенно прекрасна',
  'Как же хочется поспать',
];

const IDS = Array.from({ length: PHOTOS_LIMIT }, (v, k) => k + 1);
const IMAGES = Array.from({ length: PHOTOS_LIMIT }, (v, k) => k + 1);
const COMMENTS = Array.from({ length: PHOTO_COMMENTS_LIMIT }, (v, k) => k + 1);

function fakeUniqId(arr) {
  const randomIndex = randomInteger(1, IDS.length);
  const id = arr[randomIndex];
  arr.splice(randomIndex, 1);

  return id;
}

function makeFakeComment() {
  return {
    id: fakeUniqId(COMMENTS.slice()),
    avatar: `img/avatar-${randomInteger(1, 6)}.svg`,
    message: MESSAGES[randomInteger(0, MESSAGES.length - 1)],
    name: NAMES[randomInteger(0, NAMES.length - 1)],
  };
}

function makeFakeComments() {
  const comments = [];

  for (let i = 0; i < randomInteger(1, PHOTO_COMMENTS_LIMIT); i++) {
    comments.push(makeFakeComment());
  }

  return comments;
}

function makeFakePhoto() {
  return {
    id: fakeUniqId(IDS),
    url: `photos/${fakeUniqId(IMAGES)}.jpg`,
    description: DESCRIPTIONS[randomInteger(0, DESCRIPTIONS.length - 1)],
    likes: randomInteger(15, 200),
    comments: makeFakeComments(),
  };
}

function fetchPhotos() {
  const photos = [];

  for (let i = 0; i < PHOTOS_LIMIT; i++) {
    photos.push(makeFakePhoto());
  }

  return photos;
}

export { fetchPhotos, makeFakeComments };
