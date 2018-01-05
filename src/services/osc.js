import {stringify} from 'qs';
import request from '../utils/request';

export async function findTweetlist(params) {
  return request(APIHOST + `ms/api/osc/tweets?${stringify(params)}`);
}
