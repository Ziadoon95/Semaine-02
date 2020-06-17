/* 
Exercice 3.1
créez une variable leftNumber, attribuez lui le nombre de votre choix,
puis créez une variable rightNumber, attirubez lui également le nombre de votre choix. 
Créez une fonction qui vérifie si la variable rightNumber est plus petite que la variable leftNumber, 
si la variable rightNumber est plus petite que la variable leftNumber renvoyez "true", sinon renvoyez "false"
 */
let leftNumber = 8 ; 
let rightNumber = 44 ;

function verify()
{
    if(leftNumber > rightNumber )
    {
        return true ; 
    }else{
        return false ;
    }
}

/* Exercice 3.2
Dans le fichier script.js, créez une fonction qui vérifie si la variable leftNumber est plus grande que 10, 
si oui, retournez true, sinon, retournez false.
 */
function verify_two()
{
    if(leftNumber > 10 )
    {
        return true ; 
    }else{
        return false ;
    }
}

/* Exercice 3.3

créez une fonction qui vérifie si les variables leftNumber et rightNumber sont divisibles par deux, 
si oui, renvoyez "true", sinon, renvoyez "false"
 */

function divisible()
{
    if(leftNumber % 2 == 0 && rightNumber % 2 == 0 )
    {
        return true ; 
    }else{
        return false ;
    }
}