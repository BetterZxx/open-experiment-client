import request from '@/utils/request';

export async function reqAddRole(params) {
  return request('/permission/addUserRole', {
    method: 'POST',
    data: params,
  });
}
