import { addRule, queryRule, removeRule, updateRule ,reqLabProjects,reqLabKeyProjects} from './service';
import { message } from 'antd';

const Model = {
  namespace: 'lab',
  state: {
    labProjects:[],
    tabActiveKey:'1',
    preTabActiveKey:'0'
  },
  effects: {
    *fetchProjects({ payload }, { call, put }) {
      console.log(payload)
      const response = payload.projectType===2?yield call(reqLabKeyProjects,payload):yield call(reqLabProjects, payload);
      if(response.code===0){
        yield put({
          type: 'save',
          payload: response.data,
        });
      }else{
        message.error('请求审批项目出错')
      }
      
    },
  },
  reducers: {
    save(state, {payload}) {
      return { ...state, labProjects: payload };
    },
    changeTabActiveKey(state,{payload}){
      return {...state,tabActiveKey:payload}
    },
    changePreTabActiveKey(state,{payload}){
      return {...state,preTabActiveKey:payload}
    }
  },
};
export default Model;
