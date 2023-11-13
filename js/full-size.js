import { body } from './utils';

const bigPicture = document.querySelector('.big-picture');
const imgElement = bigPicture.querySelector('.big-picture__img img');
const likesCountElement = bigPicture.querySelector('.likes-count');
const commentShown = bigPicture.querySelector('.social__comment-shown-count');
const commentTotal = bigPicture.querySelector('.social__comment-total-count');
const socialComments = bigPicture.querySelector('.social__comments');
const socialCaption = bigPicture.querySelector('.social__caption');
const avatarSize = 35;
const commentCounter = bigPicture.querySelector('.social__comment-count');
const closeButton = bigPicture.querySelector('.big-picture__cancel');
const initComments = 5;
const commentsLoadButton = bigPicture.querySelector('.social__comments-loader');
let currentPhoto;

function handleEscapeKey(event) {
  if (event.key === 'Escape') {
    closeFullsize();
  }
}

function closeFullsize() {
  bigPicture.classList.add('hidden');
  commentCounter.classList.remove('hidden');
  commentsLoadButton.classList.remove('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', handleEscapeKey);
  commentsLoadButton.removeEventListener('click', loadMoreComments);
}

function loadMoreComments() {
  let shownCommentCounter = Number(commentShown.textContent);
  const commentsCounterBefore = shownCommentCounter;
  shownCommentCounter += initComments;
  commentShown.textContent = Math.min(shownCommentCounter, Number(commentTotal.textContent));
  for (let i = commentsCounterBefore; i < shownCommentCounter && i < Number(commentTotal.textContent); i++) {
    renderComment(currentPhoto.comments[i]);
  }
  if (shownCommentCounter >= Number(commentTotal.textContent)) {
    commentsLoadButton.classList.add('hidden');
    commentsLoadButton.removeEventListener('click', loadMoreComments);
  }
}

function renderComment(comment) {
  const commentElement = document.createElement('li');
  commentElement.classList.add('social__comment');

  const avatarElement = document.createElement('img');
  avatarElement.classList.add('social__picture');
  avatarElement.src = comment.avatar;
  avatarElement.alt = comment.name;
  avatarElement.height = avatarSize;
  avatarElement.width = avatarSize;

  const textElement = document.createElement('p');
  textElement.classList.add('social__text');
  textElement.textContent = comment.message;

  commentElement.appendChild(avatarElement);
  commentElement.appendChild(textElement);

  socialComments.appendChild(commentElement);
}

function openFullsize(photo) {
  currentPhoto = photo;
  bigPicture.classList.remove('hidden');
  imgElement.src = photo.url;
  imgElement.alt = photo.description;
  likesCountElement.textContent = photo.likes;
  commentTotal.textContent = photo.comments.length;
  commentShown.textContent = Math.min(initComments, photo.comments.length);
  socialCaption.textContent = photo.description;
  socialComments.innerHTML = '';

  for (let i = 0; i < commentShown.textContent; i++) {
    renderComment(photo.comments[i]);
  }

  if (photo.comments.length > initComments) {
    commentsLoadButton.classList.remove('hidden');
    commentsLoadButton.addEventListener('click', loadMoreComments);
  } else {
    commentsLoadButton.classList.add('hidden');
  }

  body.classList.add('modal-open');
  closeButton.addEventListener('click', closeFullsize);
  document.addEventListener('keydown', handleEscapeKey);
}

export { openFullsize };

