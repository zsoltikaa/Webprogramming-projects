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

})