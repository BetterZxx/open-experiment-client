import { reqOwnProjects, reqProjectProcess, reqProjectDetail,reqKeyProjectProcess } from '../services/detail';
import { message } from 'antd';
import router from 'umi/router';
/**
 * 获取详情后跳转的路由地址-普通立项
 * 0-实验室详情，
 * 1-二级单位详情，
 * 2-职能部门详情，
 * 3-公示项目详情，
 * 4-学生申请项目，
 * 5-指导老师查看详情,
 * 6-学生申请页公示项目详情,
 * 7-学生查看详情,
 * 8-老师修改立项申请
 */
const roleURL = [
  '/auth/lab/projects/detail',
  '/auth/second/projects/detail',
  '/auth/equipment/projects/detail',
  '/openProjects/detail',
  '/sproject/join/all/apply',
  '/tproject/manage/detail',
  '/sproject/join/all/detail',
  '/sproject/manage/detail',
  '/tproject/manage/edit'
];

/**
 * 获取详情后跳转的路由地址-重点立项
 * 0-实验室重点项目详情，
 * 1-二级单位重点项目详情，
 * 2-职能部门重点项目详情，
 * 4-学生申请重点项目页，
 * 5-指导老师查看重点项目详情,
 */
const keyRoleURL = [
  '/auth/lab/key-projects/detail',
  '/auth/second/key-projects/detail',
  '/auth/equipment/key-projects/detail',
  '/openProjects/key-detail',
  '/sproject/join/all/apply',
  '/tproject/manage/key-detail',
  '/sproject/join/all/detail',
  '/sproject/manage/key-detail'
];

const Model = {
  namespace: 'detail',
  state: {
    baseInfo: {}, //项目基本信息
    process: [],  //操作历史
    projectType:1, //项目类型-普通，重点
    role:0   //0-实验室，1-学院，2-职能部门，3-指导老师
  },
  effects: {
    /**
     * 获取操作历史
     * payload:{
     *  projectId:string
     *  role:string  //调用接口的角色  
     * }
     */
    *fetchProcess({ payload }, { call, put }) {
      console.log('fetchProcess', payload);
      const {projectType} = payload
      const res = yield call(reqProjectProcess, { projectId: payload.projectId });
      if (res.code === 0) {
        yield put({
          type: 'saveProcess',
          payload: res.data,
        });
        yield put({
          type: 'saveRole',
          payload: payload.role,
        });
        if(projectType){
          yield put({
            type: 'saveProjectType',
            payload: projectType,
          });
        }
      } else {
        yield put({
          type: 'saveProcess',
          payload: [],
        });
        message.error(`请求项目进度出错${res.msg}`);
      }
    },
    *fetchKeyProcess({ payload }, { call, put }) {
      console.log('fetchProcess', payload);
      const {projectType} = payload
      const res = yield call(reqKeyProjectProcess, { projectId: payload.projectId });
      if (res.code === 0) {
        yield put({
          type: 'saveProcess',
          payload: res.data,
        });
        yield put({
          type: 'saveRole',
          payload: payload.role,
        });
        if(projectType){
          yield put({
            type: 'saveProjectType',
            payload: projectType,
          });
        }
      } else {
        yield put({
          type: 'saveProcess',
          payload: [],
        });
        message.error(`请求项目进度出错${res.msg}`);
      }
    },

    /**
     * 获取项目详情
     * payload:{
     *  projectGroupId:string,
     *  role:string,   //0-实验室，1-学院，2-职能部门，3-指导老师
     *  [projectType:number]  //2-重点项目 ，其它或不传为普通项目
     * }
     */
    *fetchDetail({ payload }, { call, put }) {
      console.log('fetchDetail', payload);
      const {projectType} = payload
      const res = yield call(reqProjectDetail, { id:payload.projectGroupId});
      if (res.code === 0) {
        yield put({
          type: 'saveDetail',
          payload: res.data,
        });
        yield put({
          type: 'saveRole',
          payload: payload.role,
        });
        if(projectType){
          yield put({
            type: 'saveProjectType',
            payload: projectType,
          });
        }
        console.log(router);
        if (window.location.pathname === roleURL[payload.role]) {
          router.replace((projectType===2?keyRoleURL:roleURL)[payload.role]);
        } else {
          router.push((projectType===2?keyRoleURL:roleURL)[payload.role]);
        }
      } else {
        yield put({
          type: 'saveDetail',
          payload: {},
        });
        message.error(`请求项目详情出错:${res.msg}`);
      }
    },
  },
  reducers: {
    saveProcess(state, { payload }) {
      return { ...state, process: payload };
    },
    saveDetail(state, { payload }) {
      return { ...state, baseInfo: payload };
    },
    saveRole(state, { payload }) {
      return { ...state, role: payload };
    },
    saveProjectType(state,{payload}) {
      return {...state, projectType:payload}
    }
  },
};
export default Model;