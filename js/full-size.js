function openFullsize (photo) {
    const bigPicture = document.querySelector('.big-picture');    
    const imgElement = bigPicture.querySelector('.big-picture__img img');
    const likesCountElement = bigPicture.querySelector('.likes-count');
    const commentShown = bigPicture.querySelector('.social__comment-shown-count');
    const commentTotal = bigPicture.querySelector('.social__comment-total-count');
    const socialComments = bigPicture.querySelector('.social__comments');
    const socialCaption = bigPicture.querySelector('.social__caption');
    const renderComment = document,creareElement('li')

    bigPicture.classList.remove('hidden');
    imgElement.src = photo.url;
    imgElement.alt = photo.description;
    likesCountElement.textContent = photo.likes;
    commentTotal.textContent = photo.comments.length;
    commentShown.textContent = 5;//прибрать магические цифры
    socialCaption.textContent = photo.description;


}

export {openFullsize};
