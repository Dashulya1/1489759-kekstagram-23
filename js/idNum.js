//Массив из 25 чисел
const idNumInitial = new Array(25).fill(null);

const fillArray = function (emptyArray) {
  for (let int = 0; int < idNumInitial.length - 1; int++) {
    idNumInitial.push(int);
  }
  return emptyArray;
};

const idNum = fillArray(idNumInitial);

export {idNum};
