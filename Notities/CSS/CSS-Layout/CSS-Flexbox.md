## CSS Flexbox

In het HTML-document bestaat de flexbox uit 1 parent-element(met een class) en meerdere child-elements. Maakt in principe niet uit welke elementen dat zijn. Voorbeeld is een navigatiebar.

```
<nav class="container">
	<a href="#">Home</a>
	<a href="#">About</a>
	<a href="#">Contact</a>
</nav>
```

In bovenstaande voorbeeld is de nav-tag de container en de link-tags de flex-items.

Om dit te gebruiken als flexbox moet het volgende in het CSS bestand staan:

```
.container {
	display: flex;
}
```

### Flexbox properties ( eigenschappen):

* *justify-content*
* *align-items*
* *flex-direction*
* *order*
* *align-self*
* *flex-wrap*
* *flex-flow*
* *align-content*

#### justify-content

Kan (onder andere) de volgende values (waardes) hebben:

* *flex-start* -> elementen worden aan de linkerkant van de container uitgelijnt.
* *flex-end* -> elementen worden aan de rechterkant van de container uitgelijnt.
* *center* -> elementen worden in het midden van de container uitgelijnt.
* *space-between* elementen worden gelijkmatig verdeeld over de as (eerste item op de start-positie en laatste item op de end-positie).
* *space-around* Elk item heeft evenveel ruimte om zich heen. (Visueel lijkt het niet evenveel, het eerste item is 1 deel van de container rand verwijder, maar 2 delen van het volgende item (1 deel van zn eigen ruimte en 1 deel van de ruimte van het volgende item)).
* *space-evenly* De items zijn zo verdeeld dat de ruimte tussen alle items (en dat naar de randen) gelijk is. 

#### align-items
* *flex-start* ->  elementen worden uitgelijnd naar de bovenkant van de container.
* *flex-end* -> elementen worden uitgelijnd naar de onderkant van de container.
* *center* -> elementen worden uitgelijnd op het verticaal middelpunt van de container.
* *baseline* -> elementen worden uitgelijnd op de basislijn van de container.
* *stretch* -> elementen worden uitgerokken om binnen de container te passen.


#### flex-direction

* *row* -> elementen worden geplaatst in dezelfde richting als deze van de tekst.
* *row-reverse* -> elementen worden geplaatst in de tegenovergestelde richting van de tekst.
* *column* -> elementen worden onder elkaar geplaatst.
* *column-reverse* -> elementen worden boven elkaar geplaatst.

#### flex-wrap

#### flex-row

#### align-content

#### order

#### align-self