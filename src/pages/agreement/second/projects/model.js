import { reqSecondProjects,reqUpdateFunds} from './service';
import { message } from 'antd';

const Model = {
  namespace: 'second',
  state: {
    secondProjects:[],
    tabActiveKey:'0'
  },
  effects: {
    *fetchProjects({ payload }, { call, put }) {
      /**
       * payload:{
       *  data:object,
       *  status:string
       * }
       */
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
    *updateFunds({payload},{call,put}){
      console.log('updateFunds',payload)
      const res = yield call(reqUpdateFunds,payload.data)
      if(res.code===0){
        message.success('操作成功')
        yield put({
          type:'fetchProjects',
          payload:{
            status:payload.status
          }
        })
      }else{
        message.error('操作失败')
      }
    },
  },
  
  reducers: {
    save(state, {payload}) {
      return { ...state, secondProjects: payload };
    },
    changeTabActiveKey(state,{payload}){
      return {...state,tabActiveKey:payload}
    }
  },
};
export default Model;
