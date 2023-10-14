function randomizer(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomComments(amountComments) {
  const comments = [];
  const names = [
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

  const rows = `Всё отлично!
  В целом всё неплохо. Но не всё.
  Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.
  Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.
  Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.
  Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!`.split(/\n/);

  for (let i = 0; i < amountComments; i++) {
    const comment = {
      id: i,
      avatar: `img/avatar-${randomizer(1, 6)}.svg`,
      message: rows[randomizer(0, rows.length - 1)],
      name: names[randomizer(0, names.length - 1)],
    };
    comments.push(comment);
  }
  return comments;
}

function mock(numPhotos) {
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
  const photos = [];
  for (let i = 0; i < numPhotos; i++) {
    const obj = {
      id: i,
      url: `photos/${i}.jpg`,
      description: descriptions[randomizer(0, descriptions.length - 1)],
      likes: randomizer(15, 200),
      comments: randomComments(randomizer(0, 30))
    };
    photos.push(obj);
  }
  return photos;
}

