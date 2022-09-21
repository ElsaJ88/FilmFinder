### CSS media queries

Met media queries zorg je ervoor dat je website op verschillende apparaten goed te gebruiken is. Zoals tablets, telefoons etc.

``` 
body { background-color: red; }

@media  (min-width: 1024px) {
        body {
                background-color: blue}
}
```

??tussen @ media en () nog 'screen' of 'only screen' toevoegen altijd?? -> opzoeken

De css media queries moeten onderaan de css file staan

Wanneer je start met de mobiele versie gebruik je:
>  `@media (min-with: 600px)`

Als je start met de desktop versie gebruik je:
> `@media (max-with: 600px)`


Onderstaande zijn gebruikelijk viewports:
```
// Smartphones (portrait)
minimal width : 320px;

// Tablets (portrait)
minimal width : 768px

// Desktop 
minimal width : 1024px
```

Onderstaande tag wordt toegevoegd aan de `<head></head>` dit zorgt ervoor dat je website op de juiste scale weergeven wordt op een mobiele device.

`<meta name="viewport" content="width=device-width, initial-scale=1.0">`