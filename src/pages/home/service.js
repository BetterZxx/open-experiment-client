import request from '@/utils/request';

export async function fakeChartData() {
  return request('/api/fake_chart_data');
}
export async function reqCanApplyProjects(){
  return request('/project/getAllOpenTopicByStudent')
}
export async function reqfilterProjects(params){
  return request('/project/conditionallyQueryOfCheckedProjectByFunctionalDepartment',{
    method:'post',
    data:params
  })

}