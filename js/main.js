//Функция, возвращающая случайное целое число из переданного диапазона включительно.
//решение https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random#%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5_%D1%81%D0%BB%D1%83%D1%87%D0%B0%D0%B9%D0%BD%D0%BE%D0%B3%D0%BE_%D1%86%D0%B5%D0%BB%D0%BE%D0%B3%D0%BE_%D1%87%D0%B8%D1%81%D0%BB%D0%B0_%D0%B2_%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%BD%D0%BE%D0%BC_%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B2%D0%B0%D0%BB%D0%B5_%D0%B2%D0%BA%D0%BB%D1%8E%D1%87%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE
const randomInteger = function (minNum, maxNum) {
  if (minNum >= 0 && maxNum > minNum) {
    minNum = Math.ceil(minNum);
    maxNum = Math.floor(maxNum);
    return Math.floor(Math.random() * (maxNum - minNum)) + minNum;
  }
  return false;
};

//функция для проверки длины введенного комментария
const checkLenght = (comment, maxNum) => {
  if (comment.length <= maxNum) {
    return true;
  }
  return false;
};

randomInteger();
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

const idNum = [200];

for (int = 0, int < idNum.length, int++) {
  firstNum = 1;
  idNum[int] = firstNum;
  firstNum += 1;
}

const image = [
  'avatar-1.svg',
  'avatar-2.svg',
  'avatar-3.svg',
  'avatar-4.svg',
  'avatar-5.svg',
  'avatar-6.svg',
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
    id: idNum[randomInteger(0, 134)],
    avatar: `img/avatar-${image[randomInteger(0, 5)]}.svg`,
    message: MESSAGETEXT[randomInteger(0, MESSAGETEXT.length - 1)],
    name: NAMES[randomInteger(0, NAMES.length - 1)],
  };
};

const comments = new Array(135).fill(null);

comments.forEach (commentDesc());

const createPhotoDescription = function() {
  return {
    id: idNum[randomInteger(0, 5)],
    url: `photos/${idNum[randomInteger(0, 24)]}.jpg`,
    description: description[randomInteger(0, description.length - 1)],
    likes: idNum[randomInteger(0, 199)],
    comments: comments[randomInteger(0, MESSAGETEXT.length - 1)],
  };
};

const photoDescription = [];

photoDescription;
createPhotoDescription();
