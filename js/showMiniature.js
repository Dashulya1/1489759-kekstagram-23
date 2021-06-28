//Подгружает миниатюры пользователей.
import { createMiniature } from './data.js';

//блок куда вставляем шаблон
const usersList = document.querySelector('.picture');
//переменная для шаблона
const usersPhotoTemplate = document.querySelector('#picture').content;

//заводим переменную, которая хранит коллекцию объектов
const usersData = createMiniature();
//создаем фрагмент с данными пользователей
const usersListFragment = document.createDocumentFragment();

//Функция, которая генерирует нужные данные из объектов
usersData.forEach(({url, likes, comments}) => {
  //клонируем шаблон
  const userData = usersPhotoTemplate.cloneNode(true);
  //берем из объекта url
  userData.querySelector('.picture__img').setAttribute('src', url);
  //берем количество лайков
  userData.querySelector('.picture__likes').textContent = likes;
  //берем комментарий
  userData.querySelector('.picture__comments').textContent = comments;
  //все скдладываем в шаблон
  usersListFragment.appendChild(userData);
});

//добавляем в блок разметки
usersList.appendChild(usersListFragment);
