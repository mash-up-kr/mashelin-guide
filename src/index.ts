import mock from './mock-data.json';
import store from './store.json';
import path from 'path';
import fs from 'fs';
/**
 * 매쉬업 맛집 목록을 가져옵니다.
 */
export function getMashup맛집() {
  //return mock.store_list;
  return store;
}

export function getMashup맛집byType(t: string) {
  let data = new Array();

  for (let i = 0; i < store.length; i++) {
    if (store[i].type == t) {
      data.push(store[i]);
    }
  }
  return data;
}

export function enterStoreInfo(storeInfo: any[]) {
  if (isExists(storeInfo[0], storeInfo[1])) {
    return false;
  } else {
    const storeT = {
      name: storeInfo[0],
      address: storeInfo[1],
      type: storeInfo[2],
    };

    const filePath = path.join(__dirname, 'store.json');
    const fileData = fs.readFileSync(filePath);
    const fileJSON = fileData.toString();
    const a = JSON.parse(fileJSON);
    a.push(storeT);
    fs.writeFileSync(filePath, JSON.stringify(a));
  }

  return true;
}
//가게 이름, 위치로 등록되어 있는지 찾기
export function isExists(name: string, address: string) {
  for (let i = 0; i < store.length; i++) {
    if (store[0].name === name && store[i].address === address) {
      return true; //이미 등록
    }
  }
  return false; //등록 x
}

export function viewMap() {}
