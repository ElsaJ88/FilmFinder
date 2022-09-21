# JavaScript: Functions

## Drie manieren om een function te schrijven

1. Function declaration
2. Function experession
3. Arrow function (is ook een function expression)

````
// Function declaration

function sayHello1() {
console.log("Hello1")
}


// Function expression

const sayHello2() = function() {
console.log("Hello2")
};


// Arrow function (ook een function expression)

const sayHello3 = () => {
console.log("Hello3")
};
````

## Function arguments

Een *function argument* is iets wat je aan een functie geeft

## Methods

Een *method* is een *function* binnen een *object*

## Return statements

* De *return*-keyword kan alleen binnen een *function* gebruikt worden.

**Hoe werkt een return-statment?**
* De *return-statment* stopt de *function*.
* Vervolgens wordt er teruggegaan naar de regel/lijn van het document waar de function opgeroepen is. 
* Het geeft een (returns) een *value* terug

* Vanalles kan ge*returned* worden, number, strings, zelfs andere functions.


## Functions met verschillende rollen

Functions kunnen:
1. Iets doen
2. Iets prodeceren of berekenen
3. Iets doen en iets produceren

Functions die iets doen, bijvoorbeeld:

- Iets printen naar de console
- Display een alert
- De achtergrondkleur van de webpagina veranderen
- Een email verzenden
- Een button toevoegen 
- Naar een databse versturen

Functions die iets doen hebben vaak geen return-statement nodig. Ze doen iets en zijn dan aan het einde van de function.

- Functions die iets produceren
Retourneren (returns) 1 of meerdere values, het doet niet iets.
Voorbeelden: twee getallen bij elkaar optellen, inkomstenbelasting berekenen
Functions die iets produceren of berekenen geven altijd een return-statement terug.

- Functions die beide doen
Functions die zowel iets doen als iets produceren. Het is *best practice* om zo weinig mogelijk tot geen van deze functions te gebruiken. 
