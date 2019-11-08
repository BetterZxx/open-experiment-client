import { message } from 'antd';
import { reqAddRole } from './service';

const Model = {
  namespace: 'role',
  state: {
    roles:[]
  },
  effects: {
    *fetch({ payload }, { call }) {
      // yield call(reqUpdateApply, payload);
      // if(res.code===0)
      // message.success('提交成功');
      // else{
      //   message.error('编辑出错')
      // }
      // //window.location.href
    },
    *add({payload},{call,put}){
      const res = yield call (reqAddRole,payload)
      if(res.code===0){
        message.success('添加成功')
        yield put({
          type:'fetch'
        })
      }else{
        message.error(`操作失败：${res.msg}`)
      }
    }
  },
  
};
export default Model;
