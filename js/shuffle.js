//https://bost.ocks.org/mike/shuffle/
export function shuffle (shuffledArray) {
  const numbers = shuffledArray.length - 1;
  let current;
  let remain;

  //Пока остаются неперемешанные элементы массива
  while (numbers) {
    //Взять из оставшихся элемент массива
    remain = Math.floor(Math.random() * shuffledArray--);
    //Взять текущий элемент
    current = shuffledArray[numbers];
    //Поменять их местами
    shuffledArray[numbers] = shuffledArray[remain];
    shuffledArray[remain] = current;
  }
  return shuffledArray;
}
