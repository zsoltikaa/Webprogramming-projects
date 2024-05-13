// JavaScript (loadanimation.js)

// Amikor a dokumentum betöltődik
document.addEventListener("DOMContentLoaded", function() {
    // Gomb elem kiválasztása
    var filterButton = document.getElementById('filterButton');
    // Szűrő menü létrehozása
    var filterMenu = document.createElement('div');
    filterMenu.classList.add('filter-menu'); // Adjuk hozzá a filter-menu osztályt a szűrő menühöz
    filterMenu.innerHTML = `
        <select class="form-select">
            <option selected>Válasszon kategóriát</option>
            <option value="option1">Opció 1</option>
            <option value="option2">Opció 2</option>
            <option value="option3">Opció 3</option>
        </select>
    `;
    // Szűrő menü hozzáadása a dokumentumhoz
    document.body.appendChild(filterMenu);
    // Szűrő menü rejtése
    filterMenu.style.display = 'none';

    // Gomb kattintás eseménykezelése
    filterButton.addEventListener('click', function() {
        // Ha a szűrő menü látható, akkor elrejtjük, egyébként megjelenítjük
        if (filterMenu.style.display === 'block') {
            filterMenu.style.display = 'none';
        } else {
            filterMenu.style.display = 'block';
        }
    });
});