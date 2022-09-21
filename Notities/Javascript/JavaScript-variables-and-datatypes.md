# JavaScript - variabelen en datatypes

## Variables
Variables worden gebruikt om data (tijdelijk) op te slaan in het computergeheugen. 

### Notatie van variablen

2 opties: `let` en `const`. (In oudere versies werd `var` gebruikt, dit kan je nog tegenkomen bij oude codes).

``` 
let firstName = 'Elsa';

let lastName = 'Jansen'; 
```

`const` wordt gebruikt wanneer de variabele-value niet moet kunnen veranderen.

`let` wordt gebruikt wanneer de value wel moet kunnen veranderen.

*Regels bij de naamgeving van variables*
* Mogen geen 'reseverd keywords' zijn. Zoals 'let', 'var', 'if', 'else'.
* Zorg dat ze een betekenis hebben. Dat duidelijk is welke data er opgeslagen wordt. 
* Kunnen niet starten met een nummer.
* Mogen geen spatie of '-'(hyphen) bevatten. Variablenames met meerdere woorden worden aan elkaar geschreven, middels *camel notation*, zie onder.
* Ze zijn hoofdlettergevoelig

*Camel notation*

Het is gebruikelijk in JavaScript om voor het eerste woord geen hoofdletter te gebruiken en bij elk volgend woord wel een hoofdletter.

`const fullName = 'Elsa Jansen';`

## Belangrijkste primitieve datatypes

* String
* Number
* Boolean
* undefined
* null

### String

Tekstuele data, genoteerd tussen aanhalingstekens.

````
let firstName = 'Elsa';
````

### Number

Is een nummer, wordt zonder aanhalingstekens getypt. 

````
let age = 34;
````

### Boolean

Een boolean kan slechts 2 values hebben: `true` of `false`.

````
let isApproved: true;
````

### undefined

Wanneer er geen waarde is toegekend aan een variable is deze per definitie `undefined` 

### null

Representeert de opzettelijke afwezigheid van een object value