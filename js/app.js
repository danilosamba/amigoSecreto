let amigos = [];

function adicionar(){
    let amigo = document.getElementById('nome-amigo').value.toUpperCase(); // Convertendo para caixa alta
    let add = document.getElementById('lista-amigos');

    if(amigo == ''){
        alert('Digite um nome para continuar');
        return;
    } else {
        if (amigos.includes(amigo)) {
            alert('Nome já adicionado!');
            return;
        }

        console.log(`Consultar amigos ${amigos} ${amigo}`);
        embaralhar(amigos);
        amigos.push(amigo);

        add.innerHTML = add.innerHTML + amigo + ', ';

        limpar();
        console.log(`Amigo ${amigo} Consulta Grupo: ${amigos}`);
    }
}

function sortear(){
    if (amigos.length < 3){
        alert('Você precisa incluir ao menos 3 nomes');
        return;
    } 

    let sorteio = document.getElementById('lista-sorteio');
    for (let i = 0; i < amigos.length; i++) {
        if(i == amigos.length - 1){
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br>';
        }
    }
    console.log(`Amigos Embaralhados ${amigos}`);
}

function reiniciar(){
    amigos = [];

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

