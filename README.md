# uni-axios-adapter

一个专用于uniapp框架在使用axios时使用的adapter

```ts
import axios from 'axios';
import uniAdapter from 'uni-axios-adapter';

axios.defaults.adapter = uniAdapter;

const requestOptions = {
  url: 'https://jsonplaceholder.typicode.com/posts/1', // 替换成你要请求的 URL
  method: 'GET'
};

// 发送 GET 请求
axios(requestOptions)
  .then((response) => {
    // 请求成功处理
    responseShow.value = JSON.stringify(response.data);
    console.log('Response Data:', response.data);
    console.log('Status Code:', response.status);
  })
  .catch((error) => {
    // 请求失败处理
    console.error('Error:', error);
  });
```
