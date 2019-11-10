import { queryCurrent, query as queryUsers,reqUserInfo } from '@/services/user';
import {message} from 'antd'
const UserModel = {
  namespace: 'user',
  state: {
    currentUser: {},
    userInfo:{}
  },
  effects: {
    *fetch(_, { call, put }) {
      const response = yield call(reqUserInfo);
      if(response.code===0){
        console.log('cur',response)
        yield put({
          type: 'saveCurrentUser',
          payload: response.data,
        });
      }else{
        message.error(`获取用户信息出错${response.msg}`)
      } 
    },
  },
  reducers: {
    saveCurrentUser(state, action) {
    
      return { ...state, currentUser: action.payload || {} };
    },
    // changeNotifyCount(
    //   state = {
    //     currentUser: {},
    //   },
    //   action,
    // ) {
    //   return {
    //     ...state,
    //     currentUser: {
    //       ...state.currentUser,
    //       notifyCount: action.payload.totalCount,
    //       unreadCount: action.payload.unreadCount,
    //     },
    //   };
    // },
  },
};
export default UserModel;
