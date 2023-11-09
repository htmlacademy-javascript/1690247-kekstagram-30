const uploadButton = document.querySelector('.img-upload__input');
const uploadForm = document.querySelector('.img-upload__overlay');

function showUploadForm () {
  uploadForm.classList.remove('hidden');
}

uploadButton.addEventListener('change', () => showUploadForm());
