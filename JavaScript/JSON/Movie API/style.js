// az űrlap beküldésének eseménykezelése
document.getElementById("searchForm").addEventListener("submit", function(event) {
    
    // böngészú alapértelemezett működésének megállítása
    event.preventDefault()

    // a keresett érték eltárolása az input mezőből
    const searched = document.getElementById("search").value;
    console.log(searched);

    // XMLHttpRequest új pédányának létrehozása
    const xhttp = new XMLHttpRequest();

     /* Az OMDB API URL összeállítása a keresett film alapján
    az encodeURI() beépített function átalakítja az URL-t kompatibilis formára
    */
    const url = `http://www.omdbapi.com/?s=${encodeURI(searched)}&apiKey=d699c1df`;
    console.log(url);

    // Az AJAX kérés beállítása
    xhttp.open("GET", url, true);

    // ha az AJAX kérés sikeres, akkor fut le a függvény
    xhttp.onload = function() 
    {
        // ellenőrizzük, hogy a válasz státusza 200-as e
        if (xhttp.status == 200) 
        {
            // válasz
            console.log(xhttp.responseText);
            const response = JSON.parse(xhttp.responseText);
            console.log(response);
            // a render függvény meghívása
            if (response.Search) 
            {
                renderFilms(response.Search);
            }
            else 
            {
                console.error("Nincs találat! ")
            }
        }
        else 
        {
            console.error("AJAX hiba: ", xhr.statusText)
        }
    }

    // az AJAX kérés elküldése
    xhttp.send();

    // filmek kirenderelése
    function renderFilms(films)
    {
        const filmsContainer = document.getElementById("films")
        // kiürítjük a filmek konténert a böngészőből
        filmsContainer.innerHTML = "";
        // tömb elemein végigiterálás
        films.forEach(function(film)
        {
            const card = `
            <div class = "col-lg-4 col-md-6 col-sm-12">
            <div class="card">
            <img src="${film.Poster}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${film.Title}</h5>
                <p class="card-text">${film.Year}</p>
            </div>
            </div>
            </div>`;
            filmsContainer.innerHTML += card;
        });
    }

})