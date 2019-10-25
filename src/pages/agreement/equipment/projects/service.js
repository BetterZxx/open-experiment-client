import request from '@/utils/request';


export async function reqEquipmentProjects(payload){
  return request('/project/getPendingApprovalProjectByFunctionalDepartment')
}
