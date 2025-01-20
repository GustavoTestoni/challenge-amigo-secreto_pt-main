
let amigos = [];



function adicionarAmigo() {
    let nome = document.getElementById("amigo").value
    if (amigos.includes(nome)) {
        
        alert ("Esse amigo já foi adicionado");
    } else {
        amigos.push(nome)
        document.getElementById("amigo").value = "";
        exibirNomeNaLista(nome);
    }

}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Nenhum amigo foi adicionado ainda!");
        return;
    }else
{
    document.getElementById("resultado").textContent = "";

    
    let sorteio = Math.floor(Math.random() * amigos.length);
    let nomeSorteado = amigos[sorteio]; 
    
    document.getElementById("resultado").textContent = nomeSorteado;
    limparListaDeAmigos();
    
}
}





function exibirNomeNaLista(nome) {
    let lista = document.getElementById("listaAmigos");


    let li = document.createElement('li');
    li.textContent = nome; 


    lista.appendChild(li);
}

function limparListaDeAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
}
function limparCampo() {
    document.getElementById("amigo").value = "";
    limparListaDeAmigos();  
    document.getElementById("resultado").textContent = ""; 
}
