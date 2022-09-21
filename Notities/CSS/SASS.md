# SASS

* SASS staat voor **S**yntactically **A**wesome **S**tylesheet
* SASS is een extensie van CSS
* Sass is een CSS pre-processor
* Compatible met alle CSS-versies
* Verminderd de repetition en bespaard daardoor tijd

De browers begrijpt geen SASS code, je hebt daarvoor een SASS pre-processor nodig om de Sass code om te zetten naar de standaard CSS-code.

Dit proces heet transpiling, dus je hebt een transpiler nodig (een soort programma) die van de SASS code CSS-code maakt.

> SASS files hebben de '.scss' file extension

## SASS Variables

Variables zijn een manier om informatie/data op te slaan die je later kan hergebruiken. 

Je kan gebruik maken van:

* strings
* numbers
* colors
* booleans
* lists
* nulls

### SASS Variable Syntax

het '$' symbool wordt gebruikt om een variable aan te geven. Voorbeeld:

````
$variablename: value;
````

## Nesting

Net zoals in een html document kan je in een SASS bestand selectors in elkaar *nesten*. Voorbeeld:

````
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  li {
    display: inline-block;
  }
  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
      &:hover {
      background-color: green;
      }
  }
}
````

Ook pseudoclasses en elements kunnen worden toegevoegd door het '&' teken ervoor te zetten.

### Sass Nested Properties
Veel CSS properties hebben dezelfde prefix, zoals font-family, font-size en font-weight of text-align, text-transform en text-overflow.

Met Sass kun je deze alsnested properties noteren:

````
font: {
  family: Helvetica, sans-serif;
  size: 18px;
  weight: bold;
}

text: {
  align: center;
  transform: lowercase;
  overflow: hidden;
}
````

## Mixins

Door `@mixin` te gebruiken kan je meerdere regels css code maken en hergebruiken op meerdere plekken.

````
@mixin name {
  property: value;
  property: value;
  ...
}
````

`@include` gebruik je om de mixin toe te passen (te includeren).

````
selector {
  @include mixin-name;
}
````

## @import en partials

Dit is een manier om de code DRY (Don't Repeat Yourself) te houden.

Door gerelateerde code in een apart bestand te zetten en deze in te voegen in het hoofdbestand met `@import`.

### Syntax
````
@import filename;
````

### SASS partial syntax

````
 _filename;
````

