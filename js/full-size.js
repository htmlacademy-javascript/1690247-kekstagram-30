const pictures = document.querySelectorAll('.picture__img');

function openFullsize () {
    document.querySelector('.big-picture').classList.remove('hidden');
    //document.querySelector('.big-picture__img')
}

export {openFullsize};