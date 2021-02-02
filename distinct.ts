let array_B: string[] = ['a','b','c','d','a','b','c','a','b','a','e','e']

class Solution {

    solution(array: string[]){

        enum countables {};
        for (let i: number = 0;i<array.length; i++){ // agrupar os valores em um grupo

            let j:number = i+1;
            let counter:number = 1;

            while (j != array.length ){
                let name: string = array[i]
                if (array[i] == array[j] && array[i] != ''){
                    array[j] = '';
                    counter++
                    
                    countables[name] = counter
                    j++
                    
                } else if (array[i] != array[j] && array[i] != ''){
                    countables[name] = counter
                    j++
                } else{
                    j++
                }

            };
            
            
        };
        let distincts:number = 0
        distincts = Object.values(countables).length // contar quantos grupos tem
       
        countables['Distincts'] = distincts // adicionar a saída final com os grupos e quantos grupos existem
        
        return countables
    }
}

let distinct = new Solution().solution(array_B)
console.log(distinct)