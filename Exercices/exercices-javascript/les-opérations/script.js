//Insérez ici les exercices 2.1 à 2.4

// Insérez ici les exercices 2.4 à 2.8 en utilisant les variables déjà créées à votre disposition

let firstNumber = 9;
let secondNumber = 8;
let thirdNumber = 4;
let fourthNumber = 12;
/**Exercice 2.1
 * Dans le fichier script.js créez une fonction permettant de calculer le carré des nombres 
 * suivant et affichez le résultat dans la console: 2, 4, 8, 16
 */
function carre(nombre)
{
    return nombre * nombre ; 
}
console.log(carre(2));
console.log(carre(4));
/**
 * Exercice 2.2
Créez une fonction permettant de vérifier que les nombres suivant sont divisibles par deux 
et affichez le résultat dans la console: 3, 178, 65, 98, 123
 */
function paireImpaire(nombre)
{
    if(nombre % 2 == 0)
    {
        console.log("le nombre "+ nombre + " est divisble par deux ");
    }else {
        console.log("le nombre "+ nombre + " n'est pas divisble par deux ");

    }
}

paireImpaire(178); 
paireImpaire(65); 

/**Exercice 2.3
 * Dans le fichier script.js, créez une fonction permettant de calculer le coût d'une 
 * lampe ikea de 79.99e remisée à 19% et affichez le résultat dans la console
 */
function calcul(price , percentage )
{
    return price * (percentage / 100); 
}

/**Exercice 2.4
 * Divisez la variable firstNumber de votre fichier script.js par 3 et réassignez le 
 * résultat à cette variable, imprimez la dans votre console
 */
firstNumber = firstNumber / 3 ; 
console.log(firstNumber);

/**Exercice 2.5
 * Additionnez la variable firstNumber et la variable secondNumber de votre fichier 
 * script.js et réassignez le résultat à la variable secondNumber imprimez la dans votre console
 */
secondNumber = firstNumber + secondNumber ; 
console.log(secondNumber);
/**Exercice 2.6
 * Multipliez la variable firstNumber de votre fichier script.js par la variable thirdNumber 
 * et réassignez le résultat à thirdNumber imprimez la dans votre console
 */
thirdNumber = firstNumber * thirdNumber;
console.log(thirdNumber);
/**Exercice 2.7 19/6
Soustrayez la variable firstNumber de votre fichier script.js à la variable fourthNumber et 
réassignez le résultat à fourthNumber, imprimez la dans votre console
 */
fourthNumber = fourthNumber - firstNumber ;
console.log(fourthNumber);


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

