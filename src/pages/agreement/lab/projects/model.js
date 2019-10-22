import { addRule, queryRule, removeRule, updateRule ,reqLabProjects} from './service';
import { message } from 'antd';

const Model = {
  namespace: 'lab',
  state: {
    labProjects:[]
  },
  effects: {
    *fetchProjects({ payload }, { call, put }) {
      const response = yield call(reqLabProjects, payload);
      if(response.code===0){
        yield put({
          type: 'save',
          payload: response.data.list,
        });
      }else{
        message.error('请求审批项目出错')
      }
      
    },

    *add({ payload, callback }, { call, put }) {
      const response = yield call(addRule, payload);
      yield put({
        type: 'save',
        payload: response,
      });
      if (callback) callback();
    },

    *remove({ payload, callback }, { call, put }) {
      const response = yield call(removeRule, payload);
      yield put({
        type: 'save',
        payload: response,
      });
      if (callback) callback();
    },

    *update({ payload, callback }, { call, put }) {
      const response = yield call(updateRule, payload);
      yield put({
        type: 'save',
        payload: response,
      });
      if (callback) callback();
    },
  },
  reducers: {
    save(state, {payload}) {
      return { ...state, labProjects: payload };
    },
  },
};
export default Model;
