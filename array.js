var array_A = [8, 2, 5, 5, 9, 2, 9];
var Solution = /** @class */ (function () {
    function Solution() {
    }
    Solution.prototype.solution = function (array) {
        for (var i = 0; i < array.length; i++) {
            for (var j = 1; j < array.length; j++) {
                if (array[i] == array[j]) {
                    array[i] = '';
                    array[j] = '';
                }
            }
        }
        for (var e = 0; e < array.length; e++) {
            if (array[e] == "") {
                array.splice(e, 1);
                e = 0;
            }
        }
        return array;
    };
    return Solution;
}());
var odd = new Solution().solution(array_A);
console.log(odd);
