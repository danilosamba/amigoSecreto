let amigos = []

function adicionar(){
let amigo = document.getElementById('nome-amigo').value;
let add = document.getElementById('lista-amigos');

if(amigo == ''){
    alert('Digite um nome para continuar');
    return;
} else{

amigos.push(amigo);

add.innerHTML = add.innerHTML + amigo + ', ';

limpar();
console.log(`Amigo ${amigo} Consulta Grupo: ${amigos}`)
}
}

function sortear(){
    embaralhar(amigos);

    let sorteio = document.getElementById('lista-sorteio')
    for (let i = 0; i < amigos.length; i++) {
        if(i == amigos.length -1){
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>';
        }else{
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br>';
        }
        
    }

console.log(`Amigos Embaralhados ${amigos}`)
}


function reiniciar(){
amigos = []

document.getElementById('nome-amigo').value = '';
document.getElementById('lista-amigos').innerHTML = '';
document.getElementById('lista-sorteio').innerHTML = '';
}

function limpar(){
    document.getElementById('nome-amigo').value = '';
}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}