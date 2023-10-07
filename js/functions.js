function checkLength(inputString, length) {
  if (inputString.length <= length) {
    return true;
  }
  return false;
}

function ternaryCheckLength(inputString, length) {
  return inputString.length <= length ? true : false;
}

function checkPalindrome(inputString) {
  let index = 0;
  let str = inputString.toLowerCase();
  str = str.replaceAll(' ', '')
  for (i = str.length - 1; i > 0; i--) {
    if (str.charAt(index) != str.charAt(i)) {
      return false;
    }
    index++;
  }
  return true;
}

function numberExtraction(inputString) {
  let str = '' + inputString;
  let finalStr = '';
  for (i = 0; i < str.length - 1; i++) {
    if (!(isNaN(str.charAt(i)))) {
      finalStr += parseInt(str.charAt(i));
    }
  }
  return parseInt(finalStr);
}
