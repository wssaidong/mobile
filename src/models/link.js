import {getRecommendLink} from '../services/link';

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
    }
  },

  reducers: {
    recommendLink(state, {payload}) {
      console.log(payload);
      return {
        ...state,
        info: payload
      };
    }
  }
};
