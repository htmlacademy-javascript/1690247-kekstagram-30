const bigPicture = document.querySelector('.big-picture');    
const imgElement = bigPicture.querySelector('.big-picture__img img');
const likesCountElement = bigPicture.querySelector('.likes-count');
const commentShown = bigPicture.querySelector('.social__comment-shown-count');
const commentTotal = bigPicture.querySelector('.social__comment-total-count');
const socialComments = bigPicture.querySelector('.social__comments');
const socialCaption = bigPicture.querySelector('.social__caption');
const avatarSize = 35;

function renderComment (comment) {
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

function openFullsize (photo) {
    bigPicture.classList.remove('hidden');
    imgElement.src = photo.url;
    imgElement.alt = photo.description;
    likesCountElement.textContent = photo.likes;
    commentTotal.textContent = photo.comments.length;
    commentShown.textContent = photo.comments.length;
    socialCaption.textContent = photo.description;
    socialComments.innerHTML = '';
    photo.comments.forEach(comment => {
        renderComment(comment);
    });
    
}

export {openFullsize};
