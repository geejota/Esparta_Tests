let array_A: number[] = [9,3,9,3,9,7,9,9];

class Solution {

    solution(array){
        for (let i: number = 0; i < array.length; i++){ // Se os números baterem, atribuir null
            for (let j: number = i+1; j < array.length; j++) {
                if (array[i] == array[j]){
                    array[j] = null;
                    array[i] = null;
                }
            }
        }
        let newArray:number[] = []
        for (let e: number = 0; e <array.length; e++){ // Apagar index com null
            if(array[e] != null) {
                newArray.push(array[e])
            }
        }
        return newArray;
    }   

}
let odd = new Solution().solution(array_A)

console.log(odd)
