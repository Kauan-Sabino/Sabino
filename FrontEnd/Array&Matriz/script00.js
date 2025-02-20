//Arrays e matrizes

//declaração
let dados = [];

let numeros = [,2,3,4,5,6,7,8,9];
let palavras = ["bloa","sapato", "caixa", "UGA"];

console.log(numeros.length);// quantidades de elementos

//indices

//imprimir elementos o 5° elemento
console.log(numeros[4]);

//adicionar elementos

//no começo
palavras.unshift("Ugassius");
//no final
palavras.push("BOOGA");
console.log(palavras);

//remoção de elementos

palavras.slice(1,2);//remove pelo indice
palavras.pop();//ultimo

palavras.shift();//primeiro
console.log(palavras)

//repetição em um Array(forEach)
palavras.forEach(palavra =>{
    console.log(palavra);
});

//manipulação de Arrays
let numerosDobro = numeros.map(x => x*10);
console.log(numerosDobro);