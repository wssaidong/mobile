import request from '../utils/request';

export async function getRandomInfo() {
  return request('http://api.laystall.top/ms/api/gain/');
}
