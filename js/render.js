function renderPictures(photos) {
  const picturesContainer = document.querySelector('.pictures');
  // контейнер, куда пихаем фотоньки

  const pictureTemplate = document.querySelector('#picture');
  //шаблон для фотонек

  photos.forEach((photo) => {
    //перебираем массив
    const pictureElement = pictureTemplate.content.cloneNode(true);
    //клонируем темплейт

    const imgElement = pictureElement.querySelector('.picture__img');
    //отдельно берем фото
    imgElement.src = photo.url;
    //записываем урл
    imgElement.alt = photo.description;
    //записываем альт

    pictureElement.querySelector('.picture__likes').textContent = photo.likes;
    pictureElement.querySelector('.picture__comments').textContent = photo.comments.length;
    //значения лайков/комментов по вкусу
    picturesContainer.appendChild(pictureElement);
    //докладываем в контейнер
  });
}

export {renderPictures};
//можно подавать в мэйн
