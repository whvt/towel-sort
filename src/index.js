
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (!matrix) {
        return [];
    } else {
        let arr = [];
        for (let i = 0; i < matrix.length; i++) {
            let bufArr = [];
            if (i % 2 > 0) {
                bufArr = bufArr.concat(matrix[i].reverse());
            } else {
                bufArr = bufArr.concat(matrix[i]);
            }
            arr = arr.concat(bufArr);
        }
        return arr;
    }
}