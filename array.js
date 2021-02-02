var array_A = [9, 3, 9, 3, 9, 7, 9, 9];
var Solution = /** @class */ (function () {
    function Solution() {
    }
    Solution.prototype.solution = function (array) {
        for (var i = 0; i < array.length; i++) { // Se os números baterem, atribuir null
            for (var j = i + 1; j < array.length; j++) {
                if (array[i] == array[j]) {
                    array[j] = null;
                    array[i] = null;
                }
            }
        }
        var newArray = [];
        for (var e = 0; e < array.length; e++) { // Apagar index com null
            if (array[e] != null) {
                newArray.push(array[e]);
            }
        }
        return newArray;
    };
    return Solution;
}());
var odd = new Solution().solution(array_A);
console.log(odd);
