//exemplo de script de manipulação DOM

function clickBtn(){
    //manipulação pelo ID -> Variável do tipo simples
    let titulo = document.getElementById("titulo");
    console.log (titulo);
    titulo.innerText = "Meu título Modificado";
    let li = document.createElement("li");
    let texto = "Modificado texto do título "
    li.innerHTML = texto+ '<button onclick="btnConfere(this)"> Confere </button>';
    //querySelector variavel simpleS
    document.querySelector(".lista").appendChild(li);
    //getElementByClassName -> vetor .descricao
    let descricao = document.querySelectorAll(".descricao");
    console.log(descricao);
    descricao.ForEach(element => element.style.color = "red");
    texto ="Modificada cor da classe para Vermelho";
    li.innerHTML = texto+'<button onclick=btnConfere(this)> Confere </button>';
}


