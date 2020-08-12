/* 
   1. 현재 웹페이지의
   2. 모든 텍스트에서
   3. 단어들을 쪼갠 후에
   4. 등장횟수를 계산하고
   5. 정렬한 후에
   6. 콘솔 창에 출력
*/

// 1-2
var entireText = document.getElementsByTagName('body')[0].innerText;


// 3
var splitText = entireText.split(' ');

// 4
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

tmpArr.sort(function (a, b) { return a[1] - b[1] })

for (var i = 0; i < tmpArr.length; i++) {
    console.log(tmpArr[i][0], tmpArr[i][1]);
}


/*
    객체 저장 토막 상식

    var obj = {};
    obj.name = "ClarXo";
    console.log(obj.name)       "ClarXo"
    console.log(obj["name"])    "ClarXo"

    var tmp = "name";
    console.log(obj[tmp])       "ClarXo"
    console.log(obj.tmp)        undefined
 */