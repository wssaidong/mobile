import {getRecommendLink, getArticles} from '../services/link';

export default {

  namespace: 'link',

  state: {},

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    }
  },

  effects: {
    *getRecommendLink({payload}, {call, put}) {
      const response = yield call(getRecommendLink, payload);
      yield put({
        type: 'recommendLink',
        payload: response
      });
    },
    *getArticles({payload}, {call, put}) {
      const response = yield call(getArticles, payload);
      yield put({
        type: 'articles',
        payload: response
      });
    }
  },

  reducers: {
    recommendLink(state, {payload}) {
      console.log(payload);
      return {
        ...state,
        info: payload
      };
    },
    articles(state, {payload}) {
      console.log(payload);
      return {
        ...state,
        info: payload.contentlist
      };
    }
  }
};
