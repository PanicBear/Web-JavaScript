// 주소창에 javascript: 로 시작하는 자바스크립트 코드를 넣으면
// 코드를 실행시킬 수 있다.
// 모든 브라우저 적용

var entireText = document.getElementsByTagName('body')[0].innerText;

var splitText = entireText.split(' ');

var wordCount = {};
for (var i = 0; i < splitText.length; i++) {
    var word = splitText[i].toLowerCase();
    if (wordCount[word] === undefined) {
        wordCount[word] = 1;
    } else {
        wordCount[word]++;
    }
}

var tmpArr = [];

for (const word in wordCount) {
    tmpArr.push([word, wordCount[word]]);
}

tmpArr.sort(function (a, b) { return b[1] - a[1] });

var str = "";
for (var i = 0; i < tmpArr.length; i++) {
    str += (tmpArr[i][0] + " : " + tmpArr[i][1]) + "\n";
}
alert(str);


// 북마클릿 제작 사이트
// https://mrcoles.com/bookmarklet/
// 주석 있으면 안됨
// 세미콜론 없으면 안됨
