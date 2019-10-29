import { reqEquipmentProjects,reqExportConclusionExcel} from './service';
import { message } from 'antd';
import {saveAs} from 'file-saver'

const Model = {
  namespace: 'equipment1',
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
  },
};
export default Model;
