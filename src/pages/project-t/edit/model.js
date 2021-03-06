import { message } from 'antd';
import { reqUpdateApply } from './service';

const Model = {
  namespace: 'editApplyForm',
  state: {},
  effects: {
    *submitUpdateForm({ payload }, { call }) {
      const res =  yield call(reqUpdateApply, payload);
      if(res.code===0)
      message.success('提交成功');
      else{
        message.error(`编辑出错${res.msg}`)
      }
      //window.location.href
    },
  },
};
export default Model;
