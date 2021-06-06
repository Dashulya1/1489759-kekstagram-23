/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
//Функция, возвращающая случайное целое число из переданного диапазона включительно.
//решение 2ой части взято с https://progi.pro/poluchit-sluchayniy-element-iz-massiva-javascript-5846915
let first = function (firstNum, lastNum) {
  let zone = [(lastNum - firstNum)];

  if (firstNum >= 0 && lastNum > firstNum) {
    let num = firstNum - 1;
    for (let int = 0; int < lastNum; int++) {
      zone[int] = num + 1;
      num = zone[int];
    }
  }
  else {
    return false;
  }

  let rundomNumber = zone[Math.floor(Math.random()*zone.length)];
  return rundomNumber;
};

//функция для проверки длины введенного комментария
let checkLenght = (comment, maxNum) => {
  if (comment.length <= maxNum) {
    return true;
  }
  return false;
};


//план кода
//1.Загрузка изображения и заполнение информации о нём
//2.Редатирование изображения и ограничения, накладываемые на поля
//3.Отправка данных на сервер
//4.Просмотр загруженных изображений
//5.Фильтрация изображений от других пользователей
