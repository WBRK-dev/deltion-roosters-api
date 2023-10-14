# Deltion Roosters API
Deze api gebruikt de roosters.deltion.nl/api als basis.

## Hoe gebruik je deze api?
```
/roster?group=KLASNAAM&week=3
```
De /roster route word gebruikt voor het krijgen het rooster voor een specifieke klas voor de hele week.<br>
De group param is verplicht.<br>
Met de week param kan een week laten ophalen. Wanneer je week 3 ophaalt haal je de data van drie weken hierna op. Bij -3 haal je de data van 3 weken terug op. **Deze param is niet verplicht.**
```
/roster/day?group=KLASNAAM&day=3
```
De /roster/day route word gebruikt voor het krijgen het rooster voor een specifieke klas voor een dag.<br>
De group param is verplicht.<br>
Met de day param kan een dag laten ophalen. Wanneer je day 3 ophaalt haal je de data van drie dagen hierna op. Bij -3 haal je de data van 3 dagen terug op. **Deze param is niet verplicht.**
