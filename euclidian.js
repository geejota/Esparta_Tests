var Solution = /** @class */ (function () {
    function Solution() {
    }
    Solution.prototype.solution = function (chocolates, intervalo) {
        var array_C = []; // lista de chocolates
        var item = 0; // quantos chocolates vai ter nessa lista
        var e = 0; // qual chocolate foi comido
        var chocolatesTaken = 0; // quantos chocolates foram comidos
        for (var i = 0; i < chocolates; i++) {
            array_C.push(item);
            item++;
        }
        while (array_C[e] != null) {
            array_C[e] = null;
            e = (e + intervalo) % chocolates;
        }
        for (var j = 0; j < array_C.length; j++) {
            if (array_C[j] == null) {
                chocolatesTaken++;
            }
        }
        return chocolatesTaken;
    };
    return Solution;
}());
var chocolatesComidos = new Solution().solution(10, 4);
console.log(chocolatesComidos);
