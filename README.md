# Joke App frontend

## [Live preview](https://konstanenonen.github.io/joke-frontend).

### Rest apin tarjoamat ominaisuudet

Joke App toimii frontend ratkaisuna kehittämälleni rest-apille. Kaikki apin perusominaisuudet ovat toiminnallisia tämän frontin avulla. Eli uusia vitsejä pystyy lisämään tietokantaan kohdasta "Add a new joke". Sen jälkeen yksittäisiä vitsejä pystyy muokkaamaan vitsikoritn napin "Edit" avulla. Tuota kautta muokkaus menee siis rest apin kautta suoraan tietokantaan asti. Vitsikorteissa on myös poisto nappula punainen "X". Sitä painamalla korttiin tulee varmistusteksti, jonka hyväksymällä kyseinen vitsi poistetaan tietokannasta asti. Viimeinen apin tarjoama tietokantatoiminnallisuus frontissa on etsiä vitsejä niiden id:n avulla oikean yläkulma "Search by id" -hakukentän avulla. Tällöin fronttiin palautetaan hakua vastaava vitsi tai valitusviesti, jos yhtään vitsiä ei löytynyt haetulla id:llä. Frontti pysyy myös ajan tasalla tietokannan tilanteesta hakemalla sieltä vitsit aina uudestaan, kun muutospyyntö lähetetään tietokantaan.

### Frontin itsenäiset ominaisuudet

Olen lisännyt sovellukseen ominaisuuksia, jotka toteutuvat täysin itsenäisesti frontissa välittämättä rest apista tuon taivaallista. Vasemmassa alakulmassa on painikkeet teeman vaihtamiseen tumman ja värikkään välillä, sekä fontin vaihtamiseen "tylsän" ja "hauskan" välillä. Toteutin nämä koko sovelluksen tyyliin vaikuttavat painikkiit React:n useContext hookin avulla, joka on tavallaan React:n oma kevyempi versio tunnetusta Redux-tilanhallintakirjastosta. 

Näiden lisäksi sovelluksen alapalkista löytyy myös kategorian filtteripainikkeet. Näiden avulla voidaan määrittää minkä kategorian vitsejä selataan (huom. näihin kuuluu myös "All jokes" kategoria kaikkien vitsien katsomiseen). Tämäkään ominaisuus ei ota yhteyttä tietokantaan, vaan filtteröi esille halutut vitsit täysin itsenäisesti frontend-puolella.

### Tyylikirjastot

Olen käyttänyt projektissani css:n omia layout-malleja, flexbox ja grid, jotka käytännössä korvaavat tyylikirjaston käyttämisen. Näiden layout-mallien avulla olen onnistunut tekemään projektistani responsiivisen kaiken kokoisilla ruuduilla, jonka esimerkiksi Bootsrap hoitaa ohjelmoijan puolesta. Sen lisäksi näin hyvin paljon vaivaa kaikkien komponenttien tyylittelyyn puhtaalla css:llä, koska se on mielestäni hauskempaa ja opettaa mielestäni enemmän, kuin esimerkiksi Bootsrapin valmiiden tyylien käyttäminen. Mielestäni olen nähnyt projektin ulkoasun hiomiseen paljon enemmän vaivaa, kuin mitä tehtävä olisi vaatinut (css-tiedostoni pituus on yli 400-riviä) ja ansaitsen mielestäni projektipisteen tästä tyylittelystä, vaikka en ole Bootsrappia tai vastaavaa käyttänyt.

### Tulevaisuuden kehitysmahdollisuudet

Voisi olla siistiä lisätä käyttäjätiliominaisuus sovellukseen, jotta jokaisella käyttäjällä voisi olla omat henkilökohtaiset vitsit. Tämä kuitenkin vaatisi muutoksia ensimmäisenä kehittämääni rest apiin ennen fronttia.

Toinen hieno kehityskohde voisi olla selainten local storagen hyödyntäminen käyttäjän valitseman teeman ja fontin tallentamiseen. Tällä hetkellä teema ja fontti valitettavasti nollaantuvat aina vakioarvoihin sessioiden välillä.