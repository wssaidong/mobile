import request from '../utils/request';

export async function getRandomInfo() {
  return request(APIHOST + 'ms/api/gain/');
}
