import request from '@/utils/request';

export async function reqApplyForm(params) {
  return request('/project/createApply', {
    method: 'POST',
    data: params,
  });
}
