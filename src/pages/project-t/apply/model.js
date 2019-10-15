import { message } from 'antd';
import { reqApplyForm } from './service';

const Model = {
  namespace: 'applyForm',
  state: {},
  effects: {
    *submitRegularForm({ payload }, { call }) {
      yield call(reqApplyForm, payload);
      message.success('提交成功');
      //window.location.href
    },
  },
};
export default Model;
