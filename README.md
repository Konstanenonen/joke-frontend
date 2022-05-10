# Joke App frontend

## [Live preview](https://konstanenonen.github.io/joke-frontend).

### Rest apin tarjoamat ominaisuudet

Joke App toimii frontend ratkaisuna kehittämälleni rest-apille. Kaikki apin perusominaisuudet ovat toiminnallisia tämän frontin avulla. Eli uusia vitsejä pystyy lisämään tietokantaan kohdasta "Add a new joke". Sen jälkeen yksittäisiä vitsejä pystyy muokkaamaan vitsikortin napin "edit" avulla. Tuota kautta muokkaus menee siiis rest apin kautta suoraan tietokantaan asti. Vitsikorteissa on myös poisto nappula punainen "X". Sitä painamalla korttiin tulee varmistusteksti, jonka hyväksymällä kyseinen vitsi poistetaan tietokannasta asti. Viimeinen apin tarjoama tietokantatoiminnallisuus frontissa on etsiä vitsejä niiden id:n avulla oikean yläkulma "Search by id" -hakukentän avulla. Tällöin fronttiin palautetaan hakua vastaava vitsi tai valitus viesti, jos yhtään vitsiä ei löytynyt haetulla id:llä. Frontti pysyy myös ajan tasalla tietokannan tilanteesta hakemalla sieltä vitsit aina uudestaan, kun muutos pyyntö lähetetään tietokantaan.

### Frontin itsenäiset ominaisuudet

Olen lisännyt sovellukseen ominaisuuksia, jotka toteutuvat täysin itsenäisesti frontissa välittämättä rest apista tuon taivaallista. Vasemmassa alakulmassa on painikkeet teeman vaihtamiseen tumman ja värikkään välillä, sekä fontin vaihtamiseen "tylsän" ja "hauskan" välillä. Toteutin nämä koko sovelluksen tyyliin vaikuttavat painikkiit React:n useContext hookin avulla, joka on tavallaan React:n oma kevyempi versio tunnetusta Redux-tilanhallintakirjastosta. 

Näiden lisäksi sovelluksen alapalkista löytyy myös kategoria filtteripainikkeet. Näiden avulla voidaan määrittää minkä kategorian vitsejä selataan (huom. näihin kuuluu myös "All jokes" kategoria kaikkien vitsien katsomiseen). Tämäkään ominaisuus ei ota yhteyttä tietokantaan, vaan filtteröi esille halutut vitsit täysin itsenäisesti frontend-puolella.

### Tulevaisuuden kehitysmahdollisuudet

Voisi olla siistiä lisätä käyttäjätiliominaisuus sovellukseen, jotta jokaisella käyttäjällä voisi olla omat henkilökohtaiset vitsit. Tämä kuitenkin vaatisi muutoksia ensimmäisenä kehittämääni rest apiin ennen fronttia.

Toinen hieno kehityskohde voisi olla selainten local storagen hyödyntäminen käyttäjän valitseman teeman ja fontin tallentamiseen. Tällä hetkellä teema ja fontti valitettavasti nollaantuvat aina vakioarvoihin sessioiden välillä.
