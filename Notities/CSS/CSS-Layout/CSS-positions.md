## CSS Positions

Er zijn 5 verschillende position values:

* static
* relative
* fixed
* absolute
* sticky

### `position: static;`

Dit is de default-modus. Static positioned elements worden niet beinvloed door de `top`, `bottom`, `left`, en `right` properties.

Een element met position: static; is niet gepositioneerd op een bepaalde manier; het is altijd gepositioneerd naar de normale flow van de webpagina.

### `position: relative;`

Een element met `position: relative` is relatief gepositioneerd ten opzichte van zijn normale positie. 

Wanneer je de `top`, `right`, `bottom` en `left` properties van een relatively-positioned element bepaald, zullen deze aangepast worden ten opzichte van hun normale positie. Andere content zal niet aangepast worden om een eventuele gap in te vullen die het element achterlaat.

### `position: fixed;`

Een element met `position-fixed;` is gepositioneerd gerelateerd aan de viewport (bv beelscherm). Wat betekent dat het altijd op dezelfde plek blijft staan (Bijvoorbeeld de linkerbovenhoek) zelfs wanneer de pagina naar beneden wordt gescrollt.

Een fixed element laat geen gap/gat achter op de plek waar het normaal gesproken geplaatst zou zijn. 

### `position: absolute;`

Een element met `position: absolute;` is gepositioneerd relatief tot de dichtsbijstaande parent (ancector).

Maar als een absolute positioned element geen gepositioneerde ancestors/parents heeft gebruikt het de body en beweegt mee met de pagina bij scrollen. 


Absolute positioned elements zijn verwijderd van de normal flow, en kunnen andere elementen overlappen.

### `position: sticky;`
Een element met `position: sticky;` is positioned gebaseerd op de gebruikers scroll positie.

Een sticky element toggles tussen relative en fixed, afhankelijk van de scroll positie. Het is positioned relative totdat een bepaalde offset position is gepaseerd in de viewport - vervolgens "stickt" het op 1 plaats(zoals position:fixed).