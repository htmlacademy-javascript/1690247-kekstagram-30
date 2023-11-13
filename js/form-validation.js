import '../vendor/pristine/pristine.min.js';

const form = document.querySelector('.img-upload__form');
const hashtagInput = document.querySelector('.text__hashtags');
const maxHashtags = 5;
const minHashtagLength = 2;
const maxHashtagLength = 20;
const symbolsPattern = /[^a-zA-Z0-9а-яА-ЯёЁ]/g;
const descriptionInput = document.querySelector('.text__description');
const maxCommentLength = 140;

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

const isUnique = (tags) => {
  const lowerCaseTags = tags.map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};

pristine.addValidator(
  hashtagInput,
  startsWithHash,
  'Хэштег должен начинаться с "#"',
  1,
  true
);

pristine.addValidator(
  hashtagInput,
  hasValidLength,
  `Длинна хэшгтега от ${minHashtagLength} до ${maxHashtagLength} символов`,
  3,
  true
);
pristine.addValidator(
  hashtagInput,
  hasValidCount,
  `Не более ${maxHashtags} хэштегов`,
  4,
  true
);
pristine.addValidator(
  hashtagInput,
  hasValidSymbols,
  'Можно использовать только буквы русского языка, латиницу и цифры в хэштеге',
  2,
  true
);
// pristine.addValidator(
//   hashtagInput,
//   isUnique,
//   'Хэштеги не должны повторяться',
//   5,
//   true
// );
const checkCommentLength = (value) => value.length <= maxCommentLength;

pristine.addValidator(
  descriptionInput,
  checkCommentLength,
  'Не более 140 знаков'
);


const onFormSubmit = (event) => {
  pristine.validate();
  event.preventDefault();
};

export { onFormSubmit, form };
