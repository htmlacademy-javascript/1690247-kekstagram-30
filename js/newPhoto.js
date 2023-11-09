import { body } from './utils';

const uploadButton = document.querySelector('.img-upload__input');
const uploadForm = document.querySelector('.img-upload__overlay');
//const preview = document.querySelector('.img-upload__preview img');
const closeButton = document.querySelector('.img-upload__cancel');

function closeUploadForm () {
  uploadForm.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', handleEscapeKey);
  closeButton.removeEventListener('click', closeUploadForm);
}

function handleEscapeKey(event) {
  if (event.key === 'Escape') {
    closeUploadForm();
  }
}

function showUploadForm () {
  uploadForm.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', handleEscapeKey);
  closeButton.addEventListener('click', closeUploadForm);
}

uploadButton.addEventListener('change', () => showUploadForm());
