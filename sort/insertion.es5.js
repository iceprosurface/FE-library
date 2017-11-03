"use strict";

(function () {
    /**
     * 插入排序
     * @param {Array} arr
     * @param {int} from
     * @param {int} to
     */
    function insertion() {
        var arr = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
        var from = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
        var to = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
        var compareFn = arguments[3];

        for (var i = from + 1; i < to; i++) {
            var element = arr[i];
            for (var j = i - 1; j >= from; j--) {
                var temp = arr[j];
                var order = compareFn(temp, element);
                if (order > 0) {
                    arr[j + 1] = temp;
                } else {
                    break;
                }
            }
        }
    }

    window.Array.prototype.insertionSort = function (compareFn) {
        insertion(this, 0, this.length, compareFn);
    };

    window.insertionSort = insertion;
})();

//# sourceMappingURL=insertion.es5.js.map

//# sourceMappingURL=insertion.es5.js.map

//# sourceMappingURL=insertion.es5.js.map

//# sourceMappingURL=insertion.es5.js.map

//# sourceMappingURL=insertion.es5.js.map

//# sourceMappingURL=insertion.es5.js.map

//# sourceMappingURL=insertion.es5.js.map

//# sourceMappingURL=insertion.es5.js.map

//# sourceMappingURL=insertion.es5.js.map

//# sourceMappingURL=insertion.es5.js.map

//# sourceMappingURL=insertion.es5.js.map

//# sourceMappingURL=insertion.es5.js.map

//# sourceMappingURL=insertion.es5.js.map

//# sourceMappingURL=insertion.es5.js.map

//# sourceMappingURL=insertion.es5.js.map

//# sourceMappingURL=insertion.es5.js.map

//# sourceMappingURL=insertion.es5.js.map

//# sourceMappingURL=insertion.es5.js.map

//# sourceMappingURL=insertion.es5.js.map

//# sourceMappingURL=insertion.es5.js.map

//# sourceMappingURL=insertion.es5.js.map

//# sourceMappingURL=insertion.es5.js.map

//# sourceMappingURL=insertion.es5.js.map

//# sourceMappingURL=insertion.es5.js.map

//# sourceMappingURL=insertion.es5.js.map

//# sourceMappingURL=insertion.es5.js.map

//# sourceMappingURL=insertion.es5.js.map

//# sourceMappingURL=insertion.es5.js.map

//# sourceMappingURL=insertion.es5.js.map

//# sourceMappingURL=insertion.es5.js.map

//# sourceMappingURL=insertion.es5.js.map

//# sourceMappingURL=insertion.es5.js.map

//# sourceMappingURL=insertion.es5.js.map

//# sourceMappingURL=insertion.es5.js.map

//# sourceMappingURL=insertion.es5.js.map

//# sourceMappingURL=insertion.es5.js.map

//# sourceMappingURL=insertion.es5.js.map

//# sourceMappingURL=insertion.es5.js.map

//# sourceMappingURL=insertion.es5.js.map

//# sourceMappingURL=insertion.es5.js.map