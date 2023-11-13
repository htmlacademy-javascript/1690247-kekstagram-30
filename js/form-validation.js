import '../vendor/pristine/pristine.min.js';

const form = document.querySelector('.img-upload__form');
const hashtagInput = document.querySelector('.text__hashtags');
const descriptionInput = document.querySelector('.text__description');
const maxHashtags = 5;
const maxHashtagLength = 20;
const maxCommentLength = 140;

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--error',
  errorTextParent: 'img-upload__field-wrapper',
});

const validateStartsWithHash = (input) => {
  if (input.trim() === '') {
    return true;
  }
  return input.split(' ').every((tag) => tag === '' || tag.startsWith('#'));
};
pristine.addValidator(
  hashtagInput,
  validateStartsWithHash,
  'Каждый хэштег должен начинаться с "#"',
  1,
  true
);

const validateHasValidCharacters = (input) => {
  if (input.trim() === '') {
    return true;
  }
  return input.split(' ').every((tag) => tag === '' || /^[A-Za-zА-Яа-я0-9ёЁ]*$/.test(tag.slice(1)));
};
pristine.addValidator(
  hashtagInput,
  validateHasValidCharacters,
  'Хэштег может содержать только буквы и цифры',
  2,
  true
);

const validateHashtagLength = (input) => {
  if (input.trim() === '') {
    return true;
  }
  return input.split(' ').every((tag) => tag.length >= 2 && tag.length <= maxHashtagLength);
};
pristine.addValidator(
  hashtagInput,
  validateHashtagLength,
  `Хэштег должен быть длиной от 2 до ${maxHashtagLength} символов`,
  3,
  true
);

const validateUniqueHashtags = (input) => {
  if (input.trim() === '') {
    return true;
  }

  const hashtags = input.toLowerCase().split(' ').filter((tag) => tag !== '');
  const uniqueHashtags = {};
  let isUnique = true;

  hashtags.forEach((tag) => {
    if (uniqueHashtags[tag]) {
      isUnique = false;
    } else {
      uniqueHashtags[tag] = true;
    }
  });

  return isUnique;
};

pristine.addValidator(
  hashtagInput,
  validateUniqueHashtags,
  'Хэштеги не должны повторяться',
  4,
  true
);

const validateHashtagCount = (input) => {
  if (input.trim() === '') {
    return true;
  }
  const hashtags = input.split(' ').filter((tag) => tag !== '');
  return hashtags.length <= maxHashtags;
};
pristine.addValidator(
  hashtagInput,
  validateHashtagCount,
  `Не более ${maxHashtags} хэштегов`,
  5,
  true
);

const checkCommentLength = (value) => value.length <= maxCommentLength;
pristine.addValidator(
  descriptionInput,
  checkCommentLength,
  `Не более ${maxCommentLength} знаков`,
  1,
  true
);

const onFormSubmit = (event) => {
  const isValid = pristine.validate();
  if (!isValid) {
    event.preventDefault();
  }
};

export { onFormSubmit, form, hashtagInput, descriptionInput};
