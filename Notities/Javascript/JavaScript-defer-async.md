## JavaScript defer en async


### Defer

````
<script defer src="script.js"></script>
````

Om de pagina zo snel mogelijk te laden is het 'best practice' (op dit moment) om de script tags met het `defer` attribuut aan het eind van de `head` te zetten. 

Het `defer` attribute 'vertelt' de browser om het laden van het HTML-document (de DOM) niet te onderbreken voor het laden van het script. Het script wordt op de achtergrond geladen en zal pas nadat de DOM geladen is worden uitgevoerd.

Bij `defer` worden de scripts ook uitgevoerd op volgorde waar in ze in het HTML-

### Async

Het `async` attribute lijkt enigzins op defer. Bij gebruik van `async` wordt het laden van de DOM ook niet onderbroken, het script download op de achtergrond terwijl de DOM geladen wordt. Maar wanneer het script volledig geladen is, wordt hij direct uitgevoerd en daar wordt het laden van de DOM wel even op pauze gezet. 

### DOMContentLoaded

### Links

[Async and defer](https://javascript.info/script-async-defer)

[async vs defer attributes](https://www.growingwiththeweb.com/2014/02/async-vs-defer-attributes.html)

[Efficiently load JavaScript with defer and async](https://flaviocopes.com/javascript-async-defer/)


