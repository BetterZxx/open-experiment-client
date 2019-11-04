import request from '@/utils/request';

export async function queryPdf() {
  return request('/test.pdf',{
    method:'get',
    responseType:'blob'
  });
}
