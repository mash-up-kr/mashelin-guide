// import { getMashup맛집 } from '.';
import readline from 'readline';
import { getMashup맛집, getMashup맛집byType, isExists } from '.';
import fs from 'fs';
import path from 'path';

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
  } else if (answer === '3') {
    let nameT: any;
    let addressT: any;
    let typeT: any;

    rl.question('이름을 입력하세요 !', input => {
      nameT = input;
      rl.question('주소 입력하세요 !', input => {
        addressT = input;
        rl.question('양식, 중식, 한식, 일식중에 선택해서 입력하세요(택1) ', input => {
          typeT = input;
          const storeT = {
            name: nameT,
            address: addressT,
            type: typeT,
          };
          if (isExists(nameT, addressT)) {
            console.log('이미 등록되어 있습니다.');
            rl.close();
          } else {
            // console.log(storeT);
            const filePath = path.join(__dirname, 'store.json');
            const fileData = fs.readFileSync(filePath);
            const fileJSON = fileData.toString();
            const a = JSON.parse(fileJSON);
            a.push(storeT);
            fs.writeFileSync(filePath, JSON.stringify(a));
            rl.close();
          }
        });
      });
    });
  } else {
    console.clear();
    rl.question('\n1 or 2 or 3 만 입력해요 (ꐦ •᷄ࡇ•᷅) ', mashelinChoice);
  }
};

console.clear();
const contents = (): void => {
  console.log('<<< (*●⁰ꈊ⁰●)ﾉ  mashelin-guide   (*●⁰ꈊ⁰●)ﾉ  >>>');
  console.log('\n============================================\n');
  console.log('1. 매시업 맛집 보기');
  console.log('2. 매시업 맛집 검색하기');
  console.log('3. 매시업 맛집 등록하기\n');

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

rl.question('mashelin-guide를 시작하겠습니까? (y/n) ', answerCallback);
