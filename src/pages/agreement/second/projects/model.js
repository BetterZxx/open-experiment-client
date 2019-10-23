import { reqSecondProjects} from './service';
import { message } from 'antd';

const Model = {
  namespace: 'second',
  state: {
    secondProjects:[]
  },
  effects: {
    *fetchProjects({ payload }, { call, put }) {
      const response = yield call(reqSecondProjects, payload);
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
      return { ...state, secondProjects: payload };
    },
  },
};
export default Model;
