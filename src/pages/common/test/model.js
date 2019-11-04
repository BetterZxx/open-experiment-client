import { queryPdf } from './service';

const Model = {
  namespace: 'test',
  state: {
    pdf:null
  },
  effects: {
    *fetch(_, { call, put }) {
      
      const response = yield call(queryPdf);
      yield put({
        type: 'save',
        payload: response,
      });
    },
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, pdf:payload };
    },
  },
};
export default Model;
