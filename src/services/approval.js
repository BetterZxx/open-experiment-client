import request from '@/utils/request';


export async function reqApproval(url,data) {
  return request(url, {
    method: 'POST',
    data,
  });
}