import request from '@/utils/request';
const keyProjectsUrl = {
  '0':'/project/getKeyProjectApplyingListByLabAdmin',
  '1':'/project/getToBeReportedKeyProjectByLabAdmin',
  '12':'/project/getHistoricalKeyProjectInfo',
  '13':'/project/getHistoricalKeyProjectInfo'
}

export async function reqLabKeyProjects(payload) {
  return request(keyProjectsUrl[payload.status],{
    method:+payload.status<=1?'get':'post',
    data:payload.data
  })
}