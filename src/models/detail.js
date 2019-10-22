import {reqOwnProjects,reqProjectProcess,reqProjectDetail } from '../services/detail';
import { message } from 'antd';
import router from 'umi/router';
const roleURL =  ['','/tproject/manage/detail','/auth/lab/projects/detail','']
const Model = {
  namespace: 'detail',
  state: {
    baseInfo:{},
    process:[]
  },
  effects: {
    *fetchProcess({payload},{call,put}){
      const res = yield call(reqProjectProcess,{projectId:payload.projectId});
      if(res.code===0){
        yield put({
          type: 'saveProcess',
          payload: res.data
        })
        yield put({
          type: 'saveRole',
          payload: payload.role
        })
      }else{
        yield put({
          type: 'saveProcess',
          payload: []
        })
        message.error('请求项目进度出错')
      }
    }

    ,
    *fetchDetail({payload},{call,put}){
      const res = yield call(reqProjectDetail,{projectGroupId:payload.projectGroupId})
      if(res.code===0){
        yield put({
          type: 'saveDetail',
          payload:res.data
        })
        yield put({
          type: 'saveRole',
          payload: payload.role
        })
        router.push(roleURL[payload.role]);
      }else{
        yield put({
          type: 'saveDetail',
          payload:{}
        })
        message.error('请求项目详情出错')
      }
    }
  

   
  },
  reducers: {
    saveProcess(state,{payload}){
      return {...state,process:payload}
    },
    saveDetail(state,{payload}){
      return {...state,baseInfo:payload}
    },
    //1学生，2指导老师，3职能部门
    saveRole(state,{payload}){
      return {...state,role:payload}
    }
  },
};
export default Model;
