import { reqApplyStudents,reqAgreeStudent,reqRejectStudent,reqSetProjectLeader,reqRemoveStudent,reqAddStudent, reqFilterStudent } from './service';
import { message } from 'antd';

const Model = {
  namespace: 'applyStudents',
  state: {
    data:[]
  },
  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(reqApplyStudents, payload);
      yield put({
        type: 'save',
        payload: response.data,
      });
    },
    *filter({payload},{call,put}){
      const res = yield call(reqFilterStudent,payload)
      if(res.code===0){
        yield put({
          type: 'save',
          payload: res.data,
        });
      }else{
        message.error('筛选失败')
      }
    }
    ,
    *reject({payload},{call,put}){
      const res = yield call(reqRejectStudent,payload)
      if(res.code===0){
        message.success('操作成功')
        yield put({
          type:'fetch',
        })
      }else{
        message.error('操作失败')
      }
    },
    *remove({payload},{call,put}){
      const res = yield call(reqRmoveStudent,payload)
      if(res.code===0){
        message.success('操作成功')
        yield put({
          type:'fetch',
        })
      }else{
        message.error('操作失败')
      }
    }
    ,
    *agree({payload},{call,put}){
      const res = yield call(reqAgreeStudent,payload)
      if(res.code===0){
        message.success('操作成功')
        yield put({
          type:'fetch',
        })
      }else{
        message.error('操作失败')
      }
    },
    *setLeader({payload},{call,put}){
      const res = yield call(reqSetProjectLeader,payload)
      if(res.code===0){
        message.success('操作成功')
        yield put({
          type:'fetch',
        })
      }else{
        message.error('操作失败')
      }
    },
    *add({payload},{call,put}){
      const res = yield call(reqAddStudent,payload)
      if(res.code===0){
        message.success('操作成功')
        yield put({
          type:'fetch',
        })
      }else{
        message.error('操作失败')
      }
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
    save(state, action) {
      let data = action.payload.map(item=>{
        let data = {
          ...item,...item.userDetailVO,projectGroupId:item.id
        }
        delete data.userDetailVO
        return data
      })
      return { ...state, data };
    },
  },
};
export default Model;
