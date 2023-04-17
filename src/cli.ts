// import { getMashup맛집 } from '.';
import readline from 'readline';
import { getMashup맛집, getMashup맛집byType } from '.';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const temp = (answer: string) => {
  if (answer === '양식' || answer === '중식' || answer === '일식' || answer === '한식') {
    console.log(getMashup맛집byType(answer));
    rl.close();
  } else {
    rl.question('\n양식, 중식, 한식, 일식만 입력하세요! (ꐦ ¯−¯ ) ', temp);
  }
};

const mashelinChoice = (answer: string) => {
  if (answer === '1') {
    console.log('매셥 맛집입니다 ~!! ♡〜٩( ˃́▿˂̀ )۶〜♡ \n');

    console.log(getMashup맛집());
    rl.close();
  } else if (answer === '2') {
    rl.question('\n양식, 중식, 한식, 일식 중에 선택하세요', temp);
  } else {
    console.clear();
    // console.log('y 또는 n만 입력하세요.');
    rl.question('\n1 or 2 만 입력해요 (ꐦ •᷄ࡇ•᷅) ', mashelinChoice);
  }
};

console.clear();
const contents = (): void => {
  console.log('<<< (*●⁰ꈊ⁰●)ﾉ  mashelin-guide   (*●⁰ꈊ⁰●)ﾉ  >>>');
  console.log('\n============================================\n');
  console.log('1. 매시업 맛집 보기');
  console.log('2. 매시업 맛집 검색하기\n');

  rl.question('Enter only 1 or 2 : ', mashelinChoice);
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

rl.question('mashelin-guide를 시작하겠습니까? (y/n) ', answerCallback);
