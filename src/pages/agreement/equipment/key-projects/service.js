import request from '@/utils/request';


export async function reqEquipmentProjects(payload){
  return request('/project/getPendingApprovalProjectByFunctionalDepartment')
}
export async function reqExportConclusionExcel() {
  return request('/file/generateConclusionExcel', {
    method: 'POST',
    responseType:'blob'
  });
}