import request from '../utils/request';

export async function getRandomInfo() {
  console.log('service')
  return request('http://api.laystall.top/ms/api/gain/');
}
