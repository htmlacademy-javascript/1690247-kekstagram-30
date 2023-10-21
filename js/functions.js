function ternaryCheckLength(inputString, length) {
  return inputString.length <= length;
}
ternaryCheckLength();

function checkPalindrome(inputString) {
  let index = 0;
  let str = inputString.toLowerCase();
  str = str.replaceAll(' ', '');
  for (let i = str.length - 1; i > 0; i--) {
    if (str.charAt(index) !== str.charAt(i)) {
      return false;
    }
    index++;
  }
  return true;
}
checkPalindrome();

function numberExtraction(inputString) {
  const str = `${inputString}`;
  let finalStr = '';
  for (let i = 0; i < str.length - 1; i++) {
    if (!(isNaN(str.charAt(i)))) {
      finalStr += parseInt(str.charAt(i), 10);
    }
  }
  return parseInt(finalStr, 10);
}
numberExtraction();
