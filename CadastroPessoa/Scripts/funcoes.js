

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