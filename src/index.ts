import mock from './mock-data.json';

/**
 * 매쉬업 맛집 목록을 가져옵니다.
 */
export function getMashup맛집() {
  return mock.store_list;
}

export function getMashup맛집byType(t: string){
  let data = new Array;
  
  for(let i =0 ; i < mock.store_list.length; i++){
    if (mock.store_list[i].type == t){
      data.push(mock.store_list[i]);
    }
  }
  return data;
}

export function viewMap(){
  
}