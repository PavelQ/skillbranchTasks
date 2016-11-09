let wordsCount;

function doWork(param) {

  param = param.trim();
  let wordsArr = param.split(/ +/);
  wordsCount = wordsArr.length;
  if (checkBase(param) && checkWordsCount(wordsCount) && checkWords(wordsArr)) {
    return setNames(wordsArr);
  } else {
    return "Invalid fullname";
  }
}

function setNames(wordsArray) {
  let lastWordPos = wordsCount - 1;
  let result = trueCamelName(wordsArray[lastWordPos]);

  for (let i = 0; i < lastWordPos; i++) {
    result += ' ' + shortName(wordsArray[i]);
  }
  return result;
}

function shortName(name) {
  return name.substr(0, 1).toUpperCase() + '.';
}

function checkBase(param) {
  const paramLen = param.length;
  let re = new RegExp(/[\d_/\\,\.]/);
  let res = re.exec(param);
  let result = res === null && paramLen > 0;
  console.log('checkbase ' + result);
  return result;
}
function checkWord(word) {
  let res = /[óа-яa-z]+/.exec(word.toLowerCase());
  console.log(res);
  return res != null;
}
function checkWords(words) {
  let result = true;
  words.forEach((word)=> {
    if (!checkWord(word)) {
      result = false;
      console.log('cw false: ' + word);
    }

  });
  console.log('checkwords result: ' + result);
  return result;


}
function checkWordsCount(wordsCount) {
  let result = wordsCount < 4 && wordsCount > 0;
  console.log('checkwords count: ' + result);
  return result;
}

function trueCamelName(name) {
  let lowerName = name.toLowerCase();
  let fB = lowerName[0].toUpperCase() + lowerName.substr(1);
  console.log('trueCamelName: ' + fB);
  return fB;

}

module.exports.doWork = doWork;
