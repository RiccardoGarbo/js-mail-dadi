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
players[0] = Math.floor(Math.random() * 6) + 1 + ' Player One'

//Do un valore al secondo elemento della variabile players
players[1] = Math.floor(Math.random() * 6) + 1 + ' Player Two'

//Creo una variabile result a cui do inizialmente il valore di 'Pareggio'
let result = 'Pareggio'

//Decido il nuovo valore di result in base ai criteri che impongo
if (players[0] > players[1]) {
    result =
        'Player 1 WIN'
}
else if (players[0] < players[1]) {
    result =
        'Player 2 WIN'
}

//Importo il tutto nella pagina HTML
trowDice.innerHTML = players
resultGame.innerHTML = result
console.log(trowDice)






