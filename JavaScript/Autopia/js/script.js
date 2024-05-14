let isAscending = true; // Kezdetben növekvő sorrend

document.addEventListener("DOMContentLoaded", () => {
    loadCarData();
    setupEventListeners();
});

function setupEventListeners() {
    const filters = document.querySelectorAll("#carBrand, #carModel, #kmFrom, #kmTo, #priceFrom, #priceTo, #carTransmission, #carFuel, #carType, #performanceFrom, #performanceTo, #yearFrom, #yearTo");

    filters.forEach(filter => {
        filter.addEventListener("change", applyFilters);
    });

    document.getElementById('sortPriceButton').addEventListener('click', sortCarsByPrice);
    document.getElementById('resetFilters').addEventListener('click', resetFilters);
}

let carsData = []; // Eredeti autó adatok

function loadCarData() {
    const xhr = new XMLHttpRequest();
    const url = 'json/cars.json';

    xhr.open("GET", url, true);

    xhr.onload = function() {
        if (xhr.status == 200) {
            carsData = JSON.parse(xhr.responseText); // Eredeti autó adatok betöltése
            populateDropdowns(carsData); // Legördülő menük kitöltése
            renderCars(carsData);
        } else {
            console.error("AJAX hiba: ", xhr.statusText);
        }
    };
    xhr.send();
}

function populateDropdowns(cars) {
    const brandSelect = document.getElementById("carBrand");
    const typeSelect = document.getElementById("carType");

    const brands = [...new Set(cars.map(car => car.márka))].sort(); // ABC sorrend
    const types = [...new Set(cars.map(car => car.kivitel))];

    brands.forEach(brand => {
        const option = document.createElement("option");
        option.value = brand;
        option.textContent = brand;
        brandSelect.appendChild(option);
    });

    types.forEach(type => {
        const option = document.createElement("option");
        option.value = type;
        option.textContent = type;
        typeSelect.appendChild(option);
    });
}


function applyFilters() {
    const filteredCars = filterCars(carsData);
    renderCars(filteredCars);
}

function filterCars(cars) {
    const brand = document.getElementById("carBrand")?.value || "Any";
    const model = document.getElementById("carModel")?.value.toLowerCase() || "";
    const type = document.getElementById("carType")?.value || "Any";
    const kmFrom = parseInt(document.getElementById("kmFrom")?.value) || 0;
    const kmTo = parseInt(document.getElementById("kmTo")?.value) || Infinity;
    const yearFrom = parseInt(document.getElementById("yearFrom")?.value) || 0;
    const yearTo = parseInt(document.getElementById("yearTo")?.value) || Infinity;
    const priceFrom = parseInt(document.getElementById("priceFrom")?.value) || 0;
    const priceTo = parseInt(document.getElementById("priceTo")?.value) || Infinity;
    const transmission = document.getElementById("carTransmission")?.value || "Any";
    const fuel = document.getElementById("carFuel")?.value || "Any";
    const performanceFrom = parseInt(document.getElementById("performanceFrom")?.value) || 0;
    const performanceTo = parseInt(document.getElementById("performanceTo")?.value) || Infinity;

    return cars.filter(car => {
        return (brand === "Any" || car.márka === brand) &&
            (model === "" || car.modell.toLowerCase().includes(model)) &&
            (type === "Any" || car.kivitel === type) &&
            (car.km >= kmFrom && car.km <= kmTo) &&
            (car.évjárat >= yearFrom && car.évjárat <= yearTo) &&
            (car.vételár >= priceFrom && car.vételár <= priceTo) &&
            (transmission === "Any" || car.váltó === transmission) &&
            (fuel === "Any" || car.üzemanyag === fuel) &&
            (car.teljesítmény >= performanceFrom && car.teljesítmény <= performanceTo);
    });
}

function renderCars(cars, currentPage = 1, carsPerPage = 8) {
    const carContainer = document.querySelector(".container-fluid");
    const startIndex = (currentPage - 1) * carsPerPage;
    const endIndex = Math.min(startIndex + carsPerPage, cars.length);
    const currentCars = cars.slice(startIndex, endIndex);

    carContainer.innerHTML = "";

    currentCars.forEach(function(data) {
        const row = `
        <div class="row carRow">
            <div class="col-12 col-lg-3">
                <img src="${data.url}" alt="">
            </div>
            <div class="col-12 col-lg-3 d-flex flex-column justify-content-center align-items-center">
                <p>${data.márka} ${data.modell} ${data.típusjel}</p>
                <p>Évjárat: ${data.évjárat}</p>
                <p>Kivitel: ${data.kivitel}</p>
                <p>Állapot: ${data.állapot}</p>
            </div>
            <div class="col-12 col-lg-3 d-flex flex-column justify-content-center align-items-center">
                <p>Teljesítmény: ${data.teljesítmény} LE</p>
                <p>Hengerűrtartalom: ${data.hengerűrtartalom} cc</p>
                <p>Váltó típusa: ${data.váltó}</p>
                <p>Üzemanyag: ${data.üzemanyag}</p>
            </div>
            <div class="col-12 col-lg-3 d-flex flex-column justify-content-center align-items-center">
                <p>Km óra állása: ${data.km} Km</p>
                <p>Érvényes magyar forgalmi: ${data.okmanyok ? "Igen" : "Nem"}</p>
                <p>Elérhetőség: ${data.elérhetőség}</p>
                <p class="text-glow">Vételár: ${formatter.format(data.vételár)} HUF</p>
            </div>
        </div>
        `;
        carContainer.innerHTML += row;
    });

    updatePagination(cars.length, currentPage, carsPerPage);
}

function updatePagination(totalCars, currentPage, carsPerPage) {
    let maxDisplayedPages = 6;
    const totalPages = Math.ceil(totalCars / carsPerPage);
    const paginationContainer = document.querySelector(".pagination");

    paginationContainer.innerHTML = "";

    paginationContainer.innerHTML += `
        <li class="page-item ${currentPage === 1 ? 'disabled' : ''}">
            <a class="page-link" href="#" onclick="changePage(${currentPage - 1}); return false;" tabindex="-1" aria-disabled="true">Prev</a>
        </li>
    `;

    const startPage = Math.max(1, currentPage - Math.floor(maxDisplayedPages / 2));
    const endPage = Math.min(totalPages, startPage + maxDisplayedPages - 1);

    for (let i = startPage; i <= endPage; i++) {
        paginationContainer.innerHTML += `
            <li class="page-item ${currentPage === i ? 'active' : ''}">
                <a class="page-link" href="#" onclick="changePage(${i}); return false;">${i}</a>
            </li>
        `;
    }

    paginationContainer.innerHTML += `
        <li class="page-item ${currentPage === totalPages ? 'disabled' : ''}">
            <a class="page-link" href="#" onclick="changePage(${currentPage + 1}); return false;">Next</a>
        </li>
    `;

    if (currentPage >= totalPages - Math.floor(maxDisplayedPages / 2)) {
        maxDisplayedPages++;
    }
}

function changePage(pageNumber) {
    history.pushState({ page: pageNumber }, `Page ${pageNumber}`, `?page=${pageNumber}`);
    const filteredCars = filterCars(carsData);
    renderCars(filteredCars, pageNumber);
}

window.addEventListener('popstate', function(event) {
    const pageNumber = event.state ? event.state.page : 1;
    changePage(pageNumber);
});

function sortCarsByPrice() {
    const filteredCars = filterCars(carsData);
    if (isAscending) {
        filteredCars.sort((a, b) => a.vételár - b.vételár);
    } else {
        filteredCars.sort((a, b) => b.vételár - a.vételár);
    }
    renderCars(filteredCars);
    isAscending = !isAscending; // Váltás a növekvő és csökkenő sorrend között
}

function resetFilters() {
    document.getElementById("carBrand").value = "Any";
    document.getElementById("carModel").value = "";
    document.getElementById("carType").value = "Any";
    document.getElementById("kmFrom").value = "";
    document.getElementById("kmTo").value = "";
    document.getElementById("yearFrom").value = "";
    document.getElementById("yearTo").value = "";
    document.getElementById("priceFrom").value = "";
    document.getElementById("priceTo").value = "";
    document.getElementById("carTransmission").value = "Any";
    document.getElementById("carFuel").value = "Any";
    document.getElementById("performanceFrom").value = "";
    document.getElementById("performanceTo").value = "";
    applyFilters();
}

const formatter = new Intl.NumberFormat('hu-HU', {
    style: 'decimal',
    minimumFractionDigits: 0
});
