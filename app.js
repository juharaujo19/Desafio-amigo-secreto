//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação.
//  Aqui você deverá desenvolver a lógica para resolver o problema.

const amigos = []
const adicionarAmigo = () => {
    const text = document.getElementById("amigo").value
    if(text !== "" && text !==null){
        amigos.push(text)
        document.getElementById("amigo").value = "";
        atualizarLista()
        
        }else{
        alert("digite um nome válido")
        }
    console.log(text)
}

const atualizarLista = () => {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""
    for(const amigo of amigos) {
        const li = document.createElement("li");
        li.textContent = amigo
        lista.appendChild(li);}

}


const sortearAmigo = () => {
if(amigos.length===0){
    alert("A lista está vazia")}
else {
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoEscolhido = amigos[indiceAleatorio];

    document.getElementById("resultado").textContent = `Amigo escolhido: ${amigoEscolhido}`;

}



}
