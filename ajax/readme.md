## ajax 相关库

对于ajax常见的库有 jquery.ajax ， fetch ，native xhr，axios 等

## 1. jquery

jquery 是最为常见的携带 ajax 的库，常见的使用方法大致如下：

```
$.ajax({url:"/path/to/url"});
```

jquery ajax是非常简单易用的库，其settings主要可以配置如下内容：

+ beforeSend(xhr): Function
+ async: Boolean
+ cache: Boolean
+ complete(xhr)
+ contentType: String
+ context: Object
+ data: Object
+ dataFilter(): Function
+ dataType: String
+ error(): Function
+ success(): Function
+ jsonp: String
+ timeout: Number
+ type: Enum<http.method>
+ url: String

其 Function 回调顺序依次为：

beforeSend、error、dataFilter、success、complete

> 值得注意的是 cache 默认是 true ，在有些情况下（主要是get），浏览器将会缓存这部分数据，并直接返回，如果不希望从磁盘获取信息，每一次都从服务器获取，则应当设置为false

## 2. fetch

fetch api是一个看起来很棒，实际上用起来不怎么舒服的方法，在不愿意使用其他库的情况下，fetch相比纯xhr还是要简单不少，并且可以直接使用promise处理回调。

实际使用大致长这样

```javascript
var myHeaders = new Headers();

var myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default' };

fetch('flowers.jpg',myInit)
    .then(function(response) {
      return response.blob();
    })
    .then(function(myBlob) {
      var objectURL = URL.createObjectURL(myBlob);
      myImage.src = objectURL;
    });
```

可见使用并不是那么方便，拥有繁琐的解析和配置步骤

## 3. 原生xhr实现

大部分情况下我们并不需要直接使用 xhr 来进行 ajax，大量的类库都能有效简化 ajax 操作，但是，总有那么些需求不得不去原生实现以下，亦或是
没必要引入这么多库，这部分的代码都可以参考 文件夹 下 native.js文件中的实现

## 4. axios

axios是一个非常优秀的前端 ajax 库，并且其原生支持 promise ,且可以用于 node 环境以及 browser 环境，这是我最为推荐的一个库

使用 axios 构建一个请求大致是这样的：

> get 请求

```
axios.get('/user?ID=12345')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```

> post 请求

```
axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```

> 并发请求

```
function getUserAccount() {
  return axios.get('/user/12345');
}

function getUserPermissions() {
  return axios.get('/user/12345/permissions');
}
  axios.all([getUserAccount(), getUserPermissions()])
    .then(axios.spread(function (acct, perms) {
      // 两个请求现在都执行完成
    }));
```

> ps: axios 依赖 ES6 Promise 实现的，在使用时，必须要使用 promise 或是 polyfill。

