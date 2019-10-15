import { queryCurrent, query as queryUsers,reqUserInfo } from '@/services/user';
import {message} from 'antd'
const UserModel = {
  namespace: 'user',
  state: {
    currentUser: {},
  },
  effects: {
    *fetch(_, { call, put }) {
      const response = yield call(queryUsers);
      yield put({
        type: 'save',
        payload: response,
      });
    },
    *getUserInfo(_, { call, put }){
      const res = yield call(reqUserInfo)
      if(res.code===0){
        yield put({
          type: 'saveUserInfo',
          payload:res.data
        })
      }else{
        message.error('获取用户信息出错')
      }

    }
    ,

    *fetchCurrent(_, { call, put }) {
      const response = yield call(queryCurrent);
      yield put({
        type: 'saveCurrentUser',
        payload: response,
      });
    },
  },
  reducers: {
    saveCurrentUser(state, action) {
      return { ...state, currentUser: action.payload || {} };
    },
    saveUserInfo(state,{payload}){
      return { ...state,userInfo:payload }
    }
    ,
    changeNotifyCount(
      state = {
        currentUser: {},
      },
      action,
    ) {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          notifyCount: action.payload.totalCount,
          unreadCount: action.payload.unreadCount,
        },
      };
    },
  },
};
export default UserModel;
