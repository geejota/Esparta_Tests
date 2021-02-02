var array_B = ['a', 'b', 'c', 'd', 'a', 'b', 'c', 'a', 'b', 'a', 'e', 'e'];
var Solution = /** @class */ (function () {
    function Solution() {
    }
    Solution.prototype.solution = function (array) {
        var countables;
        (function (countables) {
        })(countables || (countables = {}));
        ;
        for (var i = 0; i < array.length; i++) {
            var j = i + 1;
            var counter = 1;
            while (j != array.length) {
                var name_1 = array[i];
                if (array[i] == array[j] && array[i] != '') {
                    array[j] = '';
                    counter++;
                    countables[name_1] = counter;
                    j++;
                }
                else if (array[i] != array[j] && array[i] != '') {
                    countables[name_1] = counter;
                    j++;
                }
                else {
                    j++;
                }
            }
            ;
        }
        ;
        var distincts = 0;
        distincts = Object.values(countables).length;
        countables['Distincts'] = distincts;
        return countables;
    };
    return Solution;
}());
var distinct = new Solution().solution(array_B);
console.log(distinct);
