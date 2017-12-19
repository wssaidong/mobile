import {findTweetlist} from '../services/osc';

export default {

  namespace: 'osc',

  state: {},

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    }
  },

  effects: {
    *findTweetlist({payload}, {call, put}) {
      const response = yield call(findTweetlist, payload);
      yield put({
        type: 'tweetlist',
        payload: response
      });
    }
  },

  reducers: {
    tweetlist(state, {payload}) {
      return {
        ...state,
        tweetlist: payload
      };
    }
  }
};
