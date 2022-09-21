# Javascript if-statements



## if-statements

Een if-statement is een conditinal statement, de code in het if-statement wordt alleen uitgevoerd wanneer er bepaalde voorwaarden (condities) actief zijn.

````
if (expression) {
 statement 
}
````

Als er niet aan de specifieke condities voldaan (if statement is `false`) wordt van de expression dan wordt de code niet uitgevoerd.

Je kan `else` gebruiken om in dat geval een andere codeblok uit te laten voeren.

````
if (expression) {
 statement1 
} else {
 statement2}
````

## else if-statements

Wanneer niet aan de eerste `if-statement` wordt voldaan, kan je met `else if` nieuwe voorwaarden laten checken. Waarbij het statement van `else` gebruikt wordt wanneer aan beide statements niet voldaan wordt. 

````
if (expression1) {
 statement1 } 
 else if (expression2) {
 statement2} 
 else {
 statement3}
````