import { createRandomIdFromRangeGenerator, randomizer } from './utils.js';

const AMOUNT_PHOTO = 25;
const AMOUNT_COMMENTS = 30;
const AMOUNT_AVATAR = 6;
const MIN_LIKES = 15;
const MAX_LIKES = 200;

const NAMES = [
  'Мышебор',
  'Зуботяп',
  'Хвостосмысл',
  'Царапа',
  'Кусихвост',
  'Сладкопуз',
  'Мурчала',
  'Мурослав',
  'Куселют',
  'Пузогрей'];

const ROWS = ['Всё отлично!',
  'В целом всё неплохо.', 'Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.', 'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.', 'Как можно было поймать такой неудачный момент?!'];

const descriptions = [
  'Закат на море',
  'Утро в горах',
  'Цветущий сад',
  'Семейный ужин',
  'Старый мост',
  'Новый город',
  'Прогулка на велосипеде',
  'Зимний пейзаж'
];

const photosID = createRandomIdFromRangeGenerator(1, AMOUNT_PHOTO + 1);
const photosURL = createRandomIdFromRangeGenerator(1, AMOUNT_PHOTO);


function randomComments(amountComments) {
  const commentsID = createRandomIdFromRangeGenerator(0, amountComments);
  const comments = [];

  for (let i = 0; i < amountComments; i++) {
    const comment = {
      id: commentsID(),
      avatar: `img/avatar-${randomizer(1, AMOUNT_AVATAR)}.svg`,
      message: ROWS[randomizer(0, ROWS.length - 1)],
      name: NAMES[randomizer(0, NAMES.length - 1)],
    };
    comments.push(comment);
  }
  return comments;
}

function mock(numPhotos) {

  const photos = [];
  for (let i = 0; i < numPhotos; i++) {
    const obj = {
      id: photosID(),
      url: `photos/${photosURL()}.jpg`,
      description: descriptions[randomizer(0, descriptions.length - 1)],
      likes: randomizer(MIN_LIKES, MAX_LIKES),
      comments: randomComments(randomizer(0, AMOUNT_COMMENTS))
    };
    photos.push(obj);
  }
  return photos;
}

export { mock, AMOUNT_PHOTO };
