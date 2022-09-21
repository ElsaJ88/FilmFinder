# Pseudo elements

CSS pseudo elements worden gebruikt om specifieke delen van een element te stylen.

Het kan bijvoorbeeld gebruikt worden om:
* De eerste letter of zinslijn te stylen 
* Content voor of achter een element toe te voegen

## Syntax

````
selector::pseudo-element {
  property: value;
}
````

## ::first-line

Dit kan gebruikt worden om de eerste lijn van een tekst specifiek te stylen. 

Het `::first-line` pseudo-element kan alleen bij block-elementen gebruikt worden.

De volgende properties kunnen voor `::first-line` gebruikt worden:

`font properties, 
color properties,
background properties,
word-spacing,
letter-spacing,
text-decoration,
vertical-align,
text-transform,
line-height,
clear `

## ::first-letter 

Dit kan gebruikt worden om de eerste letter van een tekst specifiek te stylen. 

Het `::first-letter` pseudo-element kan alleen bij block-elementen gebruikt worden.

De volgende properties kunnen voor `::first-letter` gebruikt worden:

`font properties,
color properties,
background properties,
margin properties,
padding properties,
border properties,
text-decoration,
vertical-align (only if "float" is "none"),
text-transform,
line-height,
float,
clear `

## ::before

Het `::before` pseudo-element kan gebruikt worden om content toe te voegen voor een element. 

Voorbeeld:
````
h1::before{
	content: '';
}
````

Waarbij text tussen aanhalingstekens gaat. Een plaatje op deze manier: `url(image.jpg)`

## ::after

Het `::after` pseudo-element werkt precies hetzelfde als ::before voegt dan content toe achter een element.

## ::marker

De `::marker` pseudo-element selecteery de markers van list items.

## ::selection

De `::selection` pseudo-element stylt het deel van een element dat door de gebruiker geselecteerd wordt. 

De volgende CSS properties kunnen gebruikt worden bij `::selection`: 

`color, background, cursor, outline`