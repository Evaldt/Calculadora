let resultado = document.getElementById("resultado");
let botoes = document.querySelectorAll(".botao");

botoes.forEach(function(botao) {
    botao.addEventListener("click", function() {
        let valorBotao = botao.value;

        if (valorBotao === "AC") {
            resultado.value = ""; 
        } else if (valorBotao === "=") {
            try {
                resultado.value = eval(resultado.value); 
            } catch (e) {
                resultado.value = "Erro"; 
            }
        } else if (valorBotao === "+/-") {
            resultado.value = eval(resultado.value) * -1;
        } else if (valorBotao === "%") {
            resultado.value = eval(resultado.value) / 100; 
        } else {
            resultado.value += valorBotao;
        }
    });
});