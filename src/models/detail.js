import { reqOwnProjects, reqProjectProcess, reqProjectDetail } from '../services/detail';
import { message } from 'antd';
import router from 'umi/router';
//0-实验室详情，1-二级单位详情，2-职能部门详情，3-公示项目详情，4-学生申请项目页，5-指导老师查看详情,6-学生产看详情页,7-学生项目页查看详情
const roleURL = [
  '/auth/lab/projects/detail',
  '/auth/second/projects/detail',
  '/auth/equipment/projects/detail',
  '/openProjects/detail',
  '/sproject/join/all/apply',
  '/tproject/manage/detail',
  '/sproject/join/all/detail',
  '/sproject/manage/detail'
];
const approveUrl = [
  '/project/approveProjectApplyByLabAdministrator',
  '/project/approveProjectApplyBySecondaryUnit',
  '',
];
const Model = {
  namespace: 'detail',
  state: {
    baseInfo: {},
    process: [],
  },
  effects: {
    *fetchProcess({ payload }, { call, put }) {
      console.log('fetchProcess', payload);
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
      } else {
        yield put({
          type: 'saveProcess',
          payload: [],
        });
        message.error('请求项目进度出错');
      }
    },

    /**
     * payload:{
     *  projectGroupId:string,
     *  role:string
     * }
     */
    *fetchDetail({ payload }, { call, put }) {
      console.log('fetchDetail', payload);
      const res = yield call(reqProjectDetail, { projectGroupId: payload.projectGroupId });
      if (res.code === 0) {
        yield put({
          type: 'saveDetail',
          payload: res.data,
        });
        yield put({
          type: 'saveRole',
          payload: payload.role,
        });
        console.log(router);
        if (window.location.pathname === roleURL[payload.role]) {
          router.replace(roleURL[payload.role]);
        } else {
          router.push(roleURL[payload.role]);
        }
      } else {
        yield put({
          type: 'saveDetail',
          payload: {},
        });
        message.error('请求项目详情出错');
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
    //1学生，2指导老师，3职能部门
    saveRole(state, { payload }) {
      return { ...state, role: payload };
    },
  },
};
export default Model;
