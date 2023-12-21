

//-----------ESERCIZIO DADI-------------

/*

-1 Importo dal file HTML gli elementi che potrebbero servirmi 
-2 Creo una variabile 'array' con all'interno gli elementi di cui avrò bisogno 
-3 Do un valore agli elementi all'interno della variabile
-4 Creo una variabile result con il valore di 'Pareggio
-5 Cambio il valore di result in base ai miei criteri
-6 Stampo tutto nel file HTML
*/


//Inporto dal file HTML gli elementi che ritengo necessari
const trowDice = document.getElementById('trowdice')
const resultGame = document.getElementById('result-game')

//Creo una variabbile con valore "array" in modo da contenere più 'valori-elementi'
const players = ['playerOne', 'playerTwo']

//Do un valore al primo elemento della variabile players
players[0] = Math.floor(Math.random() * 6) + 1

//Do un valore al secondo elemento della variabile players
players[1] = Math.floor(Math.random() * 6) + 1

//Creo una variabile result a cui do inizialmente il valore di 'Pareggio'
let result = 'PAREGGIO'

//Decido il nuovo valore di result in base ai criteri che impongo
if (players[0] > players[1]) {
    result = 'Player 1 WIN'
}
else if (players[0] < players[1]) {
    result = 'Player 2 WIN'
}



//Importo il tutto nella pagina HTML
trowDice.innerHTML = players
resultGame.innerHTML = result



//------ESERCIZIO EMAIL-------

/*
-1 Creo una variabile array con le email "autorizzate"
-2 Importo dal file html tutte gli elementi che necessito e ci faccio delle variabili
-3 Creo un button interattio dove al click mi effettua le operazioni i verifica
-4 Se la mail che l'utente scrive è tra le presenti nelle "autorizzate" allora apparirà un messaggio di successo, altrimenti apparirà un popup che dirà che la mail non è autorizzata.

*/
// Creo la variabile con le mail autorizzate
const emailAuthorized = ['rg94@gmail.com',
    'classe116@gmail.com',
    'stoimpazzendo@gmail.com']
// importo i vari elementi dall'HTML
const button = document.getElementById('button')
const email = document.getElementById('email')
const success = document.querySelector('.alert')
// Creo il button interrattivo con le operazioni di verifica
button.addEventListener('click', function () {
    const emailValue = email.value
    if (emailValue !== emailAuthorized[0] && emailValue !== emailAuthorized[1] && emailValue !== emailAuthorized[2]) {
        alert('Email non autorizzata');
        return;
    }
    else {
        success.classList.remove('d-none')
        return;
    }
})




