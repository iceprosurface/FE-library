/**
 * ajax 请求
 * @desc 向服务器发起 异步请求
 * @param {String} type 请求的类型
 * @param {String} url 请求地址
 * @param {Boolean} async 是否异步
 * @param {Object} data body传输数据
 * @param {String} dataType 返回值数据类型
 * @param {String} contentType 传递值数据类型
 * @param {function} beforeSend 发送前执行
 * @param {function} success 成功回调，返回{data, code}
 * @param {function} error 错误回调，返回{data, code}
 * @param {Construction} promise promise构造函数,传递null默认不使用promise回调
 * @returns {promise|null} 如果构造函数存在则返回一个promise，否则null
 */
function ajax({
                  type = 'GET',
                  url = '',
                  async = true,
                  data = null,
                  params = {},
                  dataType = 'text',
                  contentType = 'application/json',
                  beforeSend = function () {
                  },
                  success = function () {
                  },
                  error = function () {
                  }
              }, promise) {
    beforeSend()
    let xhr = createXmlHttpRequest()
    // let xhr = new XMLHttpRequest()
    xhr.responseType = dataType
    xhr.open(type, url + '?' + formatParams(params), async)
    xhr.setRequestHeader('Content-Type', contentType)
    xhr.send(JSON.stringify(data));
    let resovleFn
    let rejectFn
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            let json
            try {
                json = JSON.parse(xhr.responseText)
            } catch (e) {
                json = xhr.responseText
            }
            let response = {data: json, code: xhr.status}
            if (xhr.status >= 200 && xhr < 300) {
                success(response)
                resovleFn && resovleFn(response)
            } else {
                error(response)
                rejectFn && rejectFn(response)
            }
        }
    }
    if (promise) {
        return new promise(function (resolve, reject) {
            resovleFn = resolve
            rejectFn = reject
        })
    }
}
/**
 * 格式化参数
 * @param {Object} params
 * @returns {string}
 */
function formatParams(params = {}) {
    var arr = [];
    for (var name in params) {
        arr.push(encodeURIComponent(name) + '=' + encodeURIComponent(params[name]));
    }
    return arr.join('&');
}

/**
 * 创建一个xhr对象
 * @desc 对于绝大多数现代浏览器都可以直接使用 window.XMLHttpRequest 获得 xhr 对象
 * @returns {*}
 */
function createXmlHttpRequest() {
    if (window.ActiveXObject) {
        // IE 7 以下,事实上此情况不需要做兼容，不需要的话可以完全可以移除
        return new ActiveXObject('Microsoft.XMLHTTP')
    } else if (window.XMLHttpRequest) {
        return new XMLHttpRequest()
    }
}


