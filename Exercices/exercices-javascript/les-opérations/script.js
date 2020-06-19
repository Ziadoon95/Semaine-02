//Insérez ici les exercices 2.1 à 2.4

// Insérez ici les exercices 2.4 à 2.8 en utilisant les variables déjà créées à votre disposition

let firstNumber = 9;
let secondNumber = 8;
let thirdNumber = 4;
let fourthNumber = 12;


/* 18/6/2020
 *Exercice 2.8
 Au click sur ce bouton, incrémentez la variable incrementCounter et affichez le résultat dans votre console 
 */

var incrementCounter = 0;
function incrementOnClick() {
    //************************************************************************increment? */
    //document.getElementById("increment").addEventListener("click", function decrement() {
        // Insérez ici le bout de code nécessaire à la réalisation de l'exercice sur la décrémentation, nous verrons plus tard à quoi ces lignes pré-existantes correspondent
        incrementCounter = incrementCounter+1 ;
       console.log(incrementCounter); 
};
/*
 *End of Exercice 2.8
 */

// Exercice incrémentation
function decrementOnClick() {

    document.getElementById("decrement").addEventListener("click", function increment() {
        // Insérez ici le bout de code nécessaire à la réalisation de l'exercice sur la décrémentation, nous verrons plus tard à quoi ces lignes pré-existantes correspondent
        let decrementCounter = 100;

       console.log("Décrémentez");
})};

