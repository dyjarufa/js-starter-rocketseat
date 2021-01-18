// var xhr = new XMLHttpRequest(); // classe que nos dá acesso a funcionalidade do ajax

// xhr.open('GET','https://api.github.com/users/diego3g');
// xhr.send(null);

// xhr.onreadystatechange = function(){
//     if(xhr.readyState === 4){
//         console.log(JSON.parse(xhr.responseText));
//     }
// };



// var minhaPromise = function(){
//     return new Promise(function(resolve, reject){
//         var xhr = new XMLHttpRequest();
//         xhr.open('GET','https://api.github.com/users/diego3g');
//         xhr.send(null);

//         xhr.onreadystatechange = function(){
//             if(xhr.readyState === 4){
//                 if(xhr.status ===200){
//                     resolve(JSON.parse(xhr.responseText));
//                 }else{
//                     reject('Erro na requisição');
//                 }
//             }
//         }
//     });
// };

// minhaPromise()
//     .then(function(response){
//         console.log(response);
//     })
//     .catch(function(error){
//         console.warn(error);
//     });


//Biblioterca AXIOS para realizar requisições Ajax assincrona do projeto javascript



axios.get('https://api.github.com/users/diego3g')
.then(function(response){
    console.log(response.data.avatar_url) // data é objeto retornado com o Axios. Eu posso acessar os parametros para utilização
})
.catch(function(error){
    console.warn(error);
});
