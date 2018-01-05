import request from '../utils/request';

export async function getRecommendLink() {
  return request(APIHOST + 'ms/api/link/recommend');
}

export async function getArticles() {
  return request(APIHOST + 'ms/api/link/articles');
}
