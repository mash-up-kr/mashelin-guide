#!/usr/bin/env node
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.clear();
const contents = (): void => {
  console.log(' (*●⁰ꈊ⁰●)ﾉ  mashelin-guide   (*●⁰ꈊ⁰●)ﾉ');
  console.log('\n============================================\n');
  console.log('1. 매시업 맛집 보기');
  console.log('2. 매시업 맛집 검색하기');
  console.log('Enter only 1 or 2');
};

const answerCallback = (answer: string) => {
  if (answer === 'y') {
    contents();

    rl.close();
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
