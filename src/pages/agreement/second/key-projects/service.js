import request from '@/utils/request';
const projectsUrl = ['/project/getPendingApprovalProjectBySecondaryUnit','/project/getToBeReportedProjectBySecondaryUnit','/project/getPendingApprovalProjectByLabAdministrator','/project/getPendingApprovalProjectByLabAdministrator','/project/getToBeReportedProjectByLabLeader']
export async function queryRule(params) {
  return request('/api/rule', {
    params,
  });
}
export async function removeRule(params) {
  return request('/api/rule', {
    method: 'POST',
    data: { ...params, method: 'delete' },
  });
}
export async function addRule(params) {
  return request('/api/rule', {
    method: 'POST',
    data: { ...params, method: 'post' },
  });
}
export async function updateRule(params) {
  return request('/api/rule', {
    method: 'POST',
    data: { ...params, method: 'update' },
  });
}
export async function reqSecondProjects(payload) {
  return request(projectsUrl[payload.status])
}
export async function reqUpdateFunds(params) {
  return request('/funds/updateProjectApplyFundsBySecondaryUnit', {
    method: 'POST',
    data: params,
  });
}
export async function reqExportApplyExcel() {
  return request('/file/generateEstablishExcel', {
    method: 'POST',
    responseType:'blob'
  });
}