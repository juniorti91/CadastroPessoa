
new Vue({
    el: '#vuejs',
    data: {
        paragrafoVisivel: true,
        meuTexto: ''
    }
});

var meuTexto

function mudarValorVariavel() {
    meuTexto = $("#campo").val();
    $("#paragrafoJquery").html(meuTexto);
}