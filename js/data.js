import {randomInteger, checkLenght} from './utils.js';
import {idReady} from './idReady.js';
import {idNum} from './idNum.js';

checkLenght();

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

const MESSAGETEXT = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const description = [
  'Выходные Кекса',
  'Сегодня на дессерт сметанка',
  'Вид из окна как всегда шикарный',
  'Рыбка сегодня особенно прекрасна',
  'Как же хочется поспать',
];

const commentDesc = function() {
  return {
    id: idReady(idNum),
    avatar: `img/avatar-${randomInteger(0, 5)}.svg`,
    message: MESSAGETEXT[randomInteger(0, MESSAGETEXT.length - 1)],
    name: NAMES[randomInteger(0, NAMES.length - 1)],
  };
};

const comments = new Array(135).fill(null);

comments.forEach (commentDesc());

const createPhotoDescription = function() {
  return {
    id: idNum[randomInteger(0, 5)],
    url: `photos/${idReady(idNum)}.jpg`,
    description: description[randomInteger(0, description.length - 1)],
    likes: idNum[randomInteger(15, 200)],
    comments: comments[randomInteger(0, MESSAGETEXT.length - 1)],
  };
};

const photoDescription = [];

photoDescription;
createPhotoDescription();
