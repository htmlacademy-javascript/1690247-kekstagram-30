import '../vendor/pristine/pristine.min.js';

const form = document.querySelector('.img-upload__form');
const hashtagInput = document.querySelector('.text__hashtags');
const maxHashtags = 5;
const minHashtagLength = 2;
const maxHashtagLength = 20;
const symbolsPattern = /[^a-zA-Z0-9а-яА-ЯёЁ]/g;
//const descriptionInput = document.querySelector('.text__description');
//const maxCommentLength = 140;

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--error',
  errorTextParent: 'img-upload__field-wrapper',
});

const startsWithHash = (string) => string[0] === '#';

const hasValidLength = (string) =>
  string.length >= minHashtagLength && string.length <= maxHashtagLength;

const hasValidSymbols = (string) => symbolsPattern.test(string.slice(1));

const hasValidCount = (tags) => tags.length <= maxHashtags;

pristine.addValidator(
  startsWithHash,
  hashtagInput,
  1,
  'Хэштег должен начинаться с "#"',
  true
);

pristine.addValidator(
  hasValidLength,
  hashtagInput,
  3,
  'Длинна хэшгтега от 2 до 20 символов',
  true
);
pristine.addValidator(
  hasValidCount,
  hashtagInput,
  4,
  'Не более 5 хэштегов',
  true
);
pristine.addValidator(
  hasValidSymbols,
  hashtagInput,
  2,
  'Можно использовать только буквы русского языка, латиницу и цифры в хэштеге',
  true
);

const onFormSubmit = (event) => {
  event.preventDefault();
  pristine.validate();
};

export {onFormSubmit};
