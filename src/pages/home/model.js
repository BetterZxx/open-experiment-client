import { reqCanApplyProjects } from './service';

const Model = {
  namespace: 'openProjects',
  state: {
    projects:[]
  },
  effects: {
    
    *fetchProjects(_, { call, put }) {
      const response = yield call(reqCanApplyProjects);
      yield put({
        type: 'saveProjects',
        payload: response.data,
      });
    },
  },
  reducers: {
    saveProjects(state, { payload }){
      return { ...state, projects:payload}

    },
  },
};
export default Model;
