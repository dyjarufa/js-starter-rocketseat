
function solution(s){
 var duplicados = [...s];

 var removeduplicados = [...new Set(duplicados)]
  return removeduplicados;
  
}

var s = 'uuuuxaaaaxuuu'
console.log(solution(s));