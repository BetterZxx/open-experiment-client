import { reqEquipmentKeyProjects,reqExportConclusionExcel,reqRejectedKeyProjects} from './service';
import { message } from 'antd';
import {saveAs} from 'file-saver'

const Model = {
  namespace: 'equipmentKeyProjects',
  state: {
    projects:[],
    tabActiveKey:'0'
  },
  effects: {
    *fetchProjects({ payload }, { call, put }) {
      const response = payload.status==='0'?yield call(reqEquipmentKeyProjects, payload.data):yield call(reqRejectedKeyProjects,payload.data);
      if(response.code===0){
        yield put({
          type: 'save',
          payload: response.data,
        });
      }else{
        message.error('请求审批项目出错')
      }
      
    },
    *export({payload},{call,put}){
      const res = yield call(reqExportConclusionExcel)
      console.log(res)
      saveAs(res,'结题一览表.xlsx')
    }
  },
  reducers: {
    save(state, {payload}) {
      return { ...state, projects: payload };
    },
    changeTabActiveKey(state,{payload}){
      return {...state,tabActiveKey:payload}
    }
  },
};
export default Model;
