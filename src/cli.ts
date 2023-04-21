// import { getMashup맛집 } from '.';
import readline from 'readline';
import { enterStoreInfo, getMashup맛집, getMashup맛집byType, typeCheck } from '.';

import { contentsQuestion, storeInfoQuestion } from './question';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var question = function (q: string) {
  return new Promise((res, rej) => {
    rl.question(q, answer => {
      res(answer);
    });
  });
};
//맛집 검색
const typeQ = (answer: string) => {
  if (typeCheck(answer)) {
    console.log(getMashup맛집byType(answer));
    rl.close();
  } else {
    rl.question('\n양식, 중식, 한식, 일식만 입력하세요! (ꐦ ¯−¯ ) ', typeQ);
  }
};

const mashelinChoice = async (answer: string) => {
  if (answer === '1') {
    //맛집 전체 목록
    console.log('매셥 맛집입니다 ~!! ♡〜٩( ˃́▿˂̀ )۶〜♡ \n');

    console.log(getMashup맛집());
    rl.close();
  } else if (answer === '2') {
    //맛집 검색
    rl.question('\n양식, 중식, 한식, 일식 중에 선택하세요', typeQ);
  } else if (answer === '3') {
    //맛집 등록
    let ans = [];
    for (let i = 0; i < storeInfoQuestion.length; i++) {
      ans.push(await question(storeInfoQuestion[i]));
    }
    if (enterStoreInfo(ans)) {
      console.log('등록되었습니다.');
      rl.close();
    } else {
      console.log('이미 등록되어 있습니다.');
    }
    rl.close();
  } else {
    console.clear();
    rl.question('\n1 or 2 or 3 만 입력해요 (ꐦ •᷄ࡇ•᷅) ', mashelinChoice);
  }
};

console.clear();
const contents = (): void => {
  console.log('<<< (*●⁰ꈊ⁰●)ﾉ  mashelin-guide   (*●⁰ꈊ⁰●)ﾉ  >>>');
  console.log('\n============================================\n');
  for (const q of contentsQuestion) {
    //목록, 검색, 등록
    console.log(`${q}`);
  }
  rl.question('Enter only 1 or 2 or 3 : ', mashelinChoice);
};

const answerCallback = (answer: string) => {
  if (answer === 'y') {
    contents();
  } else if (answer === 'n') {
    console.log('ヘ(°◇、°)ノ,,, 다음에 찾아주세요~!');
    rl.close();
  } else {
    console.clear();
    // console.log('y 또는 n만 입력하세요.');
    rl.question('y 또는 n만 입력하세요.\nmashelin-guide를 시작하겠습니까? ', answerCallback);
  }
};

//시작
rl.question('mashelin-guide를 시작하겠습니까? (y/n) ', answerCallback);
