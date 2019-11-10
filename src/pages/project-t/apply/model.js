import { message } from 'antd';
import { reqApplyForm } from './service';

const Model = {
  namespace: 'applyForm',
  state: {},
  effects: {
    *submitRegularForm({ payload }, { call }) {

      const res = yield call(reqApplyForm, payload);
      if(res.code===0){
        message.success('提交成功');
      }else{
        message.error(`提交失败：${res.msg}`)
      }
      
      //window.location.href
    },
  },
};
export default Model;
