

var nome = 'Junior Paixao';
var lista = [12, 15.6, 17, 'Junior'];
var obj = {
    nome: 'Junior',
    idade: 34,
    altura: 1.85,
    especialidades: ['Programação', 'Linguagens', 'Banco de Dados']
};

var objs = [
    {
        nome: 'Junior',
        idade: 34,
        altura: 1.85,
        especialidades: ['Programação', 'Linguagens', 'Banco de Dados']
    },
    {
        nome: 'Paixao',
        idade: 40,
        altura: 1.70,
        especialidades: ['Programação', 'C#', 'JavaScript']
    }
];

function somar(valor1, valor2) {
    var resultado = valor1 + valor2;
    return resultado;
}

function mostrarResultado() {
    var valor1 = document.getElementById('valor1').value;
    var valor2 = document.getElementById('valor2').value;

    valor1 = parseInt(valor1);
    valor2 = parseInt(valor2);

    var resultado = somar(valor1, valor2);

    document.getElementById('resultado').innerHTML = resultado;
}

function alterarParagrafo(cor, tamanho, texto, id) {
    var paragrafo = document.getElementById(id);
    paragrafo.style.color = cor;
    paragrafo.style.fontSize = tamanho;
    paragrafo.innerHTML = texto;
}

function aplicarCor() {
    var cor = document.getElementById('cor').value;
    var time = document.getElementById('time').value;
    var paragrafo = document.getElementById('texto');

    //if (cor == 'vermelho' && time == 'internacional') {
    //    cor = 'red';
    //} else if (cor == 'verde' && time == 'palmeiras') {
    //    cor = 'green';
    //} else if (cor == 'azul' && time == 'bahia') {
    //    cor = 'blue';
    //} else {
    //    cor = 'black';
    //}

    switch (cor) {
        case 'vermelho':
            cor = 'red';
            break;
        case 'verde':
            cor = 'green';
            break;
        case 'azul':
            cor = 'blue';
            break;
        default:
            cor = 'black';
            break;
    }
    
    paragrafo.style.color = cor;
}

//function verificarNome() {
//    var nome = document.getElementById('nome').value;

//    while (nome != 'Junior') {
//        document.getElementById('resposta').innerHTML = 'O nome digitado não é junior';
//    }
//}

//verificarNome();

function mostrarMarcasDeCarro() {
    var marcas = ['Volkswagem', 'Chevrolet', 'Ford', 'Honda', 'Toyota', 'Mitsubishi'];

    var i = 0;

    while (i < marcas.length) {
        document.write(marcas[i] + '<br>');
        i++;
    }

    //marcas.forEach(function (item) {
    //    document.write(item + '<br>');
    //});

    //for (var i = 0; i < marcas.length; i++) {
    //    document.write(marcas[i] + '<br>');
    //}
}

function sortearMarcas() {
    var marcas2 = ['Volkswagem', 'Chevrolet', 'Ford', 'Honda', 'Toyota', 'Mitsubishi'];
    var max = marcas2.length - 1;
    var min = 0;
    var valor = Math.random() * (max - min) + min;
    return marcas2[Math.floor(valor)];
}

function sortearEnquantoNaoSairToyota() {
    document.getElementById('marcas2').innerHTML = '';

    var marcaSorteada = sortearMarcas();
    var marcaDesejada = document.getElementById('marcaDesejada').value;

    while (marcaSorteada != marcaDesejada) {
        //console.log('Marca sorteada: ' + marcaSorteada);
        document.getElementById('marcas2').innerHTML += 'Marca sorteada: ' + marcaSorteada + '<br>';
        marcaSorteada = sortearMarcas();
    }

    document.getElementById('marcas2').innerHTML += 'Saiu a: ' + marcaSorteada;
}

// quando eu ja sabe o número de repetições, deve-se usar o = FOR
// quando quero fazer a repetição para cada item de uma lista = FOREACH
// quando quero fazer algo até uma determinada condição ser sastifeita, usa o = WHILE