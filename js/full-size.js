const bigPicture = document.querySelector('.big-picture');
const imgElement = bigPicture.querySelector('.big-picture__img img');
const likesCountElement = bigPicture.querySelector('.likes-count');
const commentShown = bigPicture.querySelector('.social__comment-shown-count');
const commentTotal = bigPicture.querySelector('.social__comment-total-count');
const socialComments = bigPicture.querySelector('.social__comments');
const socialCaption = bigPicture.querySelector('.social__caption');// что значит вставить второй строкой?
const avatarSize = 35;
const commentCounter = bigPicture.querySelector('.social__comment-count');
const body = document.querySelector('body');
const closeButton = bigPicture.querySelector('.big-picture__cancel');
const initComments = 5;
const commentsLoadButton = bigPicture.querySelector('.social__comments-loader');

function closeFullsize() {
  bigPicture.classList.add('hidden');
  commentCounter.classList.remove('hidden');
  commentsLoadButton.classList.remove('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown');
  commentsLoadButton.removeEventListener('click');
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
  bigPicture.classList.remove('hidden');
  imgElement.src = photo.url;
  imgElement.alt = photo.description;
  likesCountElement.textContent = photo.likes;
  commentTotal.textContent = photo.comments.length;
  commentShown.textContent = initComments;
  socialCaption.textContent = photo.description;
  socialComments.innerHTML = '';
  let shownCommentCounter = Number(commentShown.textContent);
  if (photo.comments.length <= initComments) {
    commentShown.textContent = commentTotal.textContent;
    photo.comments.forEach((comment) => {
      renderComment(comment);
    });
    commentsLoadButton.classList.add('hidden');
  } else {
    for (let i = 1; i < initComments + 1; i++) {
      renderComment(photo.comments[i - 1]);
      commentShown.textContent = initComments;
    }
    commentsLoadButton.addEventListener('click', () => {
      const commentsCounterBefore = shownCommentCounter;
      shownCommentCounter += initComments;
      commentShown.textContent = shownCommentCounter;
      if (shownCommentCounter < Number(commentTotal.textContent)) {
        for (let i = commentsCounterBefore; i < shownCommentCounter; i++) {
          renderComment(photo.comments[i]);
        }
      } else {
        commentShown.textContent = commentTotal.textContent;
        for (let i = commentsCounterBefore; i < shownCommentCounter; i++) {
          renderComment(photo.comments[i]);
        }
        commentsLoadButton.removeEventListener('click');
      }
      commentsLoadButton.classList.add('hidden'); //не могу добиться, чтобы исчезла после прогрузки всех фото
    });
  }

  body.classList.add('modal-open');
  closeButton.addEventListener('click', () => closeFullsize());
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeFullsize();
    }
  });
}

export { openFullsize };

