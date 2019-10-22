import request from '@/utils/request';


export async function reqOwnProjects(params) {
  return request('/project/getOwnProjects', {
    method: 'GET',
    data: { ...params},
  });
}
export async function reqProjectProcess(params) {
  return request('/project/getProjectDetailById', {
    method: 'GET',
    params,
  });
}
export async function reqProjectDetail(params) {
  return request('/project/getApplyInfo', {
    method: 'get',
    params
  });
}

