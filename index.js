let nomeHeroi = "kemersonMaciel"
let xp = "4050"

let nivel
if (xp <1000) {
    nivel = "Ferro"
} else if (xp >= 1001 && xp <= 2000){
    nivel = "Bronze"
} else if ( xp >= 2001 && xp <= 5000){
    nivel = "Prata"
} else if (xp >= 6001 && xp <= 7000){
    nivel = "Ouro"
} else if (xp >= 7001 && xp <= 8000){
    nivel = "Platina"
} else if (xp >= 8001 && xp <= 9000){
    nivel = "Ascendente"
} else {
    nivel = "radiante"
}
let mensagem = "O heroi de nome " + nomeHeroi + " está no nível de " + nivel 
    console.log (mensagem)