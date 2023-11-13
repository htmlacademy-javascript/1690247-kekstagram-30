import { body } from './utils';
import { onFormSubmit } from './form-validation';

const uploadButton = document.querySelector('.img-upload__input');
const uploadOverlay = document.querySelector('.img-upload__overlay');
//const preview = document.querySelector('.img-upload__preview img');
const closeButton = document.querySelector('.img-upload__cancel');
const submitButton = document.querySelector('.upload-submit');

function closeUploadForm () {
  uploadOverlay.classList.add('hidden');
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
  uploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', handleEscapeKey);
  closeButton.addEventListener('click', closeUploadForm);
  submitButton.addEventListener('click', () => onFormSubmit());
}


uploadButton.addEventListener('change', () => showUploadForm());
