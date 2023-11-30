// convertion de la taille de centimètre en mètre 

function calculImc(poids, taille){
    let convertirMetre = taille/100;
    let tailleCalcul = convertirMetre * convertirMetre;

    let result = poids/tailleCalcul;

    return "Votre IMC est de : " + result ;
}

// definir la valiable poids et la variable taille
let poids = prompt("Quel est votre poids ?(en kilogramme)");

// si aucun poids n'est entré
if(!poids){
alert("Vous devez entrée une valeur en kg")
}

let taille = prompt("quel est votre taille ?(en centimètre)");
// si aucune taille n'est entrée
if(!taille){
    alert("Vous devez entrée une valeur en centmètre")
    }
    
alert(calculImc(poids, taille)); 