//Подгружает миниатюры пользователей.
import { createMiniature } from './data.js';

//блок куда вставляем шаблон
const usersList = document.querySelector('.picture');
//переменная для шаблона
const usersPhotoTemplate = document.querySelector('#picture').content;
//заводим переменную для url из шаблона
const addressOfPicture = usersPhotoTemplate.querySelector('.picture__img');
//заводим переменную для количества лайков из шаблона
const likesOfPicture = usersPhotoTemplate.querySelector('.picture__likes');
//заводим переменную для комментариев из шаблона
const commentsOfPicture = usersPhotoTemplate.querySelector('.picture__comments');

//заводим переменную, которая хранит коллекцию объектов
const usersData = createMiniature();
//создаем фрагмент с данными пользователей
const usersListFragment = document.createDocumentFragment();

//Функция, которая генерирует нужные данные из объектов
usersData.forEach(({url, likes, comments}) => {
  //клонируем шаблон
  usersPhotoTemplate.cloneNode(true);
  //берем из объекта url
  addressOfPicture.setAttribute('src', url);
  //берем количество лайков
  likesOfPicture.textContent = likes;
  //берем комментарий
  commentsOfPicture.textContent = comments;
  //все скдладываем в шаблон
  usersListFragment.appendChild(usersPhotoTemplate);
});

//добавляем в блок разметки
usersList.appendChild(usersListFragment);
