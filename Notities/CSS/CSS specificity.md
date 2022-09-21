## CSS Specificity

Wat houdt specificity in? -> wat de browser specificeerd als meest belangrijk en daarom deze selecteerd om te gebruiken.

Onderdelen met een hogere specificity worden gebruikt, ook al staan deze eerder in het bestand dan onderdelen met een lagere specificiteit (het cascading principe vervalt dan in dit geval).

Specificiteit, van hoog naar laag:

1. Inline CSS
2. ID's (bijv: #container)
3. Classes (bijv: .container)
4. Elements (bijv: h1)


`!important` (liever niet gebruiken!)
Dit betekent ongeveer: 'dit is belangrijk, negeer alle andere CSS'

Het is erg onhandig in gebruik, vooral als je samen met anderen in een bestand werkt, of zelf een hele tijd later wat veranderd.
De anderen (en mogelijk jijzelf) weten dan niet dat `!important` gebruikt is en waar.