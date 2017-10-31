(function () {
    /**
     * 插入排序
     * @param {Array} arr
     * @param {int} from
     * @param {int} to
     */
    function insertion(arr = [], from = 0, to = 0, compareFn) {
        for (let i = from + 1; i < to; i++) {
            var element = arr[i]
            for (let j = i - 1; j >= from; j--) {
                let temp = arr[j]
                let order = compareFn(temp, element)
                if (order > 0) {
                    arr[j + 1] = temp
                } else {
                    break
                }
            }
        }
    }

    window.Array.prototype.insertionSort = function (compareFn) {
        insertion(this, 0, this.length, compareFn)
    }

    window.insertionSort = insertion
})()
