import {shuffle} from './shuffle.js';
import {idNum} from './idNum.js';
import {randomInteger} from './utils.js';
//заносим массив в переменную
const idShuffled = shuffle(idNum);
const idMassive = [];

//Функция, возвращающая перемешанный массив с удаленными использованными значениями.
const idReady = (array) => {
  for (let int = 0; int < 24; int++) {
    //получаем рандомное число из массива 1-25
    const randomIndex = randomInteger(1, array.length - 1);
    //записываем значение из перемешанного массива в переменную
    idMassive[int] = idShuffled[randomIndex];
    //удаляем использованное значение
    array.splice(randomIndex, 1);
    //сохраняем новый массив
    return array;
  }
};

export {idReady};
