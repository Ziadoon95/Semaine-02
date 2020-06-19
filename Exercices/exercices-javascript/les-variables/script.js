/**
Exercice 1.1
Dans le fichier script.js crée une variable de type "chaîne de caractère" contenant "Hello World", ensuite, 
imprime cette variable dans la console
 */
let printHello = "Hello world ";
console.log(printHello);
/**
Exercice 1.2
Crée une variable chaîne de caractères contenant "Bonjour je m'appelle" et une variable chaîne
de caractère contenant ton prénom, ensuite concatène les et affiche les sur la console
 */
let Bonjour = "Bonjour je m'appelle" ; 
let prenom = "zaidun" ;

console.log(Bonjour + " " + prenom );

/* Exercice 1.3
Dans le fichier script.js crée une variable de type "chaîne de caractères" contenant "j'ai",
ensuite, crée une variable de type nombre contenant ton âge, ensuite crée une dernière variable chaîne de caractère 
contenant "ans", maintenant concatène les précédentes variables "Bonjour je m'appelle" "ton nom" et les deux que tu viens
de créer, imprime les sur la console
 */
let jai = "j'ai";
let age = 24 ; 
let ans = "ans";

console.log(Bonjour + " "+ prenom + " ,"+ jai + " " + age + " "+ ans);
/**
Exercice 1.4
Crée un tableau contenant les prénoms des membres de ton groupe. Affiche le
membres ayant pour index 6 en utilisant la console
 */
var SiriusGroup = ["Yana" , "Jerem" , "lionel", "sara" , "jean-paul","Antoine","Nathalie"];

console.log(SiriusGroup[6]);


/* Exercice 1.6
Crée un objet "student". Passe lui comme propriété: name, firstname, age. Donne comme valeur à ces propriétés: 
ton nom, ton prénom, ton âge (de type nombre, attention!) ensuite affiche l'objet dans la console.
 */
var student = {
    name : "obaidi" , 
    firstName : "zaidun" ,
    age : 24 
}
console.log(student);
console.log(student.firstName);