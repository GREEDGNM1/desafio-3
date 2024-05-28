const vitorias = 151;
const derrotas = 100;
let saldoVitorias 
let nivel = '';

function calcularRanking(vitorias, derrotas){

    saldoVitorias = vitorias - derrotas;

}

function definirRanking(saldoVitorias){
    if (saldoVitorias > 100) {
        nivel = "Imortal";
    } else if (saldoVitorias > 90) {
        nivel = "Lendário";
    } else if (saldoVitorias > 80) {
        nivel = "Diamante";
    } else if (saldoVitorias > 50) {
        nivel = "Ouro";
    } else if (saldoVitorias > 20) {
        nivel = "Prata";
    } else if (saldoVitorias > 10) {
        nivel = "Bronze";
    } else {
        nivel = "Ferro";
    }
    
}

function exibirRanking(){
    calcularRanking(vitorias, derrotas);
    definirRanking(saldoVitorias);
    console.log("O Herói tem de saldo de " + saldoVitorias + " vitórias e está no nível de " + nivel);
}

exibirRanking()