import request from '../utils/request';

export async function getCarousels() {
  return request(APIHOST + 'ms/api/link/carousels');
}
