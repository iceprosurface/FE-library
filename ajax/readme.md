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

fetch api是一个看起来很棒，实际上用起来不怎么舒服的方法，在不愿意使用其他库的情况下，fetch相比纯xhr要简单不少。


