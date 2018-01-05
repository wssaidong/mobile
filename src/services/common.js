import request from '../utils/request';

export async function getCarousels() {
  return request('http://api.laystall.top/ms/api/link/carousels');
}
