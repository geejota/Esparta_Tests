class Solution {

    solution(chocolates,intervalo) {
        let array_C:number[] = [] // lista de chocolates
        let item:number = 0 // quantos chocolates vai ter nessa lista
        let e:number = 0 // qual chocolate foi comido
        let chocolatesTaken:number = 0 // quantos chocolates foram comidos
       

        for (let i:number = 0; i<chocolates; i++){
             array_C.push(item)
             item++
         }

        while(array_C[e] != null){
            array_C[e] = null
            e = (e + intervalo)%chocolates
        
        }

       for(let j:number = 0; j<array_C.length; j++){
            if(array_C[j]== null){
                chocolatesTaken++
            }            
        }
     
        return chocolatesTaken
    }
}

let chocolatesComidos = new Solution().solution(10,4)
console.log(chocolatesComidos)