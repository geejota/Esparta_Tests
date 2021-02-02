let array_A: number[] = [8,2,5,5,9,2,9];

class Solution {
    solution(array){
        for (let i: number = 0; i<array.length; i++){ // Se os números baterem, deixar um valor vazio
            for (let j: number = 1; j<array.length; j++) {
                if (array[i] == array[j]){
                    array[i] = '';
                    array[j] = '';
                }
            }
        }
        for (let e: number = 0; e<array.length; e++){ // Se o valor do índice estiver vazio, apagar
            if (array[e] == "") {
                array.splice(e,1)
                e = 0
            }
        }
        return array;
    }   

}
let odd = new Solution().solution(array_A)

console.log(odd)
