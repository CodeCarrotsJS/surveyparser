# Parser wyników ankiety

## Instalacja
Wymagane: [node.js](http://nodejs.org/) i [bower](http://bower.io/).

1. Klonujemy repozytorium.
2. Robimy setup repozytorium wykonując komendę `npm install` i `bower install`.
3. Pobieramy wyniki ankiety z google drive i zpaisujemy je jako plik `results.tsv` (Plik >> pobierz jako >> Wartości rozdzielane tabulatorem).
4. Wykonujemy skrypt, który przetworzy wyniki ankiety na format json: `node app.js`.
5. Wykonujemy skrypt, który uruchomi serwer www z wynikami: `node server.js`.
5. Otwieramy w przeglądarce adres [http://127.0.0.1:8080](http://127.0.0.1:8080).

Miłego przeglądania :)