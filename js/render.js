import { openFullsize } from './full-size';


const picturesContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture');

function renderPictures(photos) {
  photos.forEach((photo) => {
    const pictureElement = pictureTemplate.content.cloneNode(true);

    const imgElement = pictureElement.querySelector('.picture__img');
    imgElement.src = photo.url;
    imgElement.alt = photo.description;

    pictureElement.querySelector('.picture__likes').textContent = photo.likes;
    pictureElement.querySelector('.picture__comments').textContent = photo.comments.length;

    pictureElement.querySelector('.picture__img').addEventListener('click', () => openFullsize(photo));

    picturesContainer.appendChild(pictureElement);
  });
}

export { renderPictures };
