import {stringify} from 'qs';
import request from '../utils/request';

export async function findTweetlist(params) {
  return request(`http://api.laystall.top/ms/api/osc/tweets?${stringify(params)}`);
}
