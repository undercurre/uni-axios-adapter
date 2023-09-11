import { expect, test } from 'vitest';
import uniAdapter from '../index';
import axios from 'axios';

test('fetches successfully data from an API', async () => {
  const data = {
    userId: 1,
    id: 1,
    adapter: 'uniapp',
    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
  };
  // 调用 fetchData 函数
  const result = await fetchData();
  // 验证返回的数据是否与模拟数据匹配
  expect(result.data).toEqual(data);
});

function fetchData() {
  // 注入adapter
  axios.defaults.adapter = uniAdapter;

  // 定义请求配置
  const requestOptions = {
    url: 'https://jsonplaceholder.typicode.com/posts/1', // 替换成你要请求的 URL
    method: 'GET'
  };

  // 发送 GET 请求
  return axios(requestOptions);
}
