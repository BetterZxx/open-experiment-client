import { queryAdvancedProfile } from './service';

const Model = {
  namespace: 'second11',
  state: {
    secondProjects:[]
  },
  effects: {
    *fetchAdvanced(_, { call, put }) {
      const response = yield call(queryAdvancedProfile);
      yield put({
        type: 'show',
        payload: response,
      });
    },
  },
  reducers: {
    show(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};
export default Model;
