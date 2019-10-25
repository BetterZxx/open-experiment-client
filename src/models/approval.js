import {reqOwnProjects,reqProjectProcess,reqProjectDetail } from '../services/detail';
import {reqApproval } from '../services/approval';
import { message } from 'antd';
import router from 'umi/router';
const roleURL =  ['','/tproject/manage/detail','/auth/lab/projects/detail','']
const approvalUrl = [
  ['/project/rejectProjectApplyByLabAdministrator','/project/approveProjectApplyByLabAdministrator','/project/reportToCollegeLeader'],
  ['/project/rejectProjectApplyBySecondaryUnit','/project/approveProjectApplyBySecondaryUnit','/project/reportToFunctionalDepartment'],
  ['/project/rejectProjectApplyByFunctionalDepartment','/project/agreeEstablish']
]
const approvalType = ['lab/fetchProjects','second/fetchProjects','']
const Model = {
  namespace: 'approval',
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
    },
    *normal({payload},{call,put}){
      const {data,type,unit,isDetail,status} = payload
      console.log('normal',payload)
      const res = yield call(reqApproval,approvalUrl[unit][type],data)
      if(res.code===0){
        message.success('操作成功！')
        if(isDetail){
          yield put({
            type:'detail/fetchDetail',
            payload:{
              projectGroupId:typeof data[0]==='object'?data[0].projectId:data[0],
              role:unit
            }
          })
          yield put({
            type:'detail/fetchProcess',
            payload:{
              projectId:data[0].projectId,
              role:unit
            }
          })        
        }else{
          yield put({
            type:approvalType[unit],
            payload:{
              status
            }
          })

        }
      }else{
        message.success('操作失败！')
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
