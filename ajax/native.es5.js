'use strict';

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

function ajax(_ref, promise) {
    var _ref$type = _ref.type;
    var type = _ref$type === undefined ? 'GET' : _ref$type;
    var _ref$url = _ref.url;
    var url = _ref$url === undefined ? '' : _ref$url;
    var _ref$async = _ref.async;
    var async = _ref$async === undefined ? true : _ref$async;
    var _ref$data = _ref.data;
    var data = _ref$data === undefined ? null : _ref$data;
    var _ref$params = _ref.params;
    var params = _ref$params === undefined ? {} : _ref$params;
    var _ref$dataType = _ref.dataType;
    var dataType = _ref$dataType === undefined ? 'text' : _ref$dataType;
    var _ref$contentType = _ref.contentType;
    var contentType = _ref$contentType === undefined ? 'application/json' : _ref$contentType;
    var _ref$beforeSend = _ref.beforeSend;
    var beforeSend = _ref$beforeSend === undefined ? function () {} : _ref$beforeSend;
    var _ref$success = _ref.success;
    var success = _ref$success === undefined ? function () {} : _ref$success;
    var _ref$error = _ref.error;
    var error = _ref$error === undefined ? function () {} : _ref$error;

    beforeSend();
    var xhr = createXmlHttpRequest();
    // let xhr = new XMLHttpRequest()
    xhr.responseType = dataType;
    xhr.open(type, url + '?' + formatParams(params), async);
    xhr.setRequestHeader('Content-Type', contentType);
    xhr.send(JSON.stringify(data));
    var resovleFn = void 0;
    var rejectFn = void 0;
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            var json = void 0;
            try {
                json = JSON.parse(xhr.responseText);
            } catch (e) {
                json = xhr.responseText;
            }
            var response = { data: json, code: xhr.status };
            if (xhr.status >= 200 && xhr < 300) {
                success(response);
                resovleFn && resovleFn(response);
            } else {
                error(response);
                rejectFn && rejectFn(response);
            }
        }
    };
    if (promise) {
        return new promise(function (resolve, reject) {
            resovleFn = resolve;
            rejectFn = reject;
        });
    }
}
/**
 * 格式化参数
 * @param {Object} params
 * @returns {string}
 */
function formatParams() {
    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

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
        return new ActiveXObject('Microsoft.XMLHTTP');
    } else if (window.XMLHttpRequest) {
        return new XMLHttpRequest();
    }
}

//# sourceMappingURL=native.es5.js.map

//# sourceMappingURL=native.es5.js.map

//# sourceMappingURL=native.es5.js.map

//# sourceMappingURL=native.es5.js.map

//# sourceMappingURL=native.es5.js.map

//# sourceMappingURL=native.es5.js.map

//# sourceMappingURL=native.es5.js.map

//# sourceMappingURL=native.es5.js.map

//# sourceMappingURL=native.es5.js.map

//# sourceMappingURL=native.es5.js.map