import { reqCanApplyProjects,reqfilterProjects } from './service';
import { message } from 'antd';

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
    *filter({payload},{call,put}){
      const res = yield call(reqfilterProjects,payload)
      if(res.code===0){
        yield put({
          type: 'saveProjects',
          payload: res.data,
        });
      }else{
        message.error('查询失败')
      }
    }
  },
  reducers: {
    saveProjects(state, { payload }){
      return { ...state, projects:payload}

    },
  },
};
export default Model;
