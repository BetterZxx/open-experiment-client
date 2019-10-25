import { reqEquipmentProjects} from './service';
import { message } from 'antd';

const Model = {
  namespace: 'equipment',
  state: {
    projects:[]
  },
  effects: {
    *fetchProjects({ payload }, { call, put }) {
      const response = yield call(reqEquipmentProjects, payload);
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
      return { ...state, projects: payload };
    },
  },
};
export default Model;
