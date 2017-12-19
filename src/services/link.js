import request from '../utils/request';

export async function getRecommendLink() {
  return request('http://api.laystall.top/ms/api/link/recommend');
}
