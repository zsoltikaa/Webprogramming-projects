const formatter = new Intl.NumberFormat("en-US", {
    style: "currency", 
    currency: "HUF",
    maximumFractionDigits: 0,
});

document.addEventListener("DOMContentLoaded", () => {
    // Load initial car data and setup event listeners
    loadCarData();
    setupEventListeners();
});

function setupEventListeners() {
    const filters = document.querySelectorAll("#carBrand, #carModel, #kmFrom, #kmTo, #priceFrom, #priceTo, #carTransmission, #carFuel");
    
    filters.forEach(filter => {
        filter.addEventListener("change", applyFilters);
    });
}

function applyFilters() {
    const xhr = new XMLHttpRequest();
    const url = 'json/cars.json';
    
    xhr.open("GET", url, true);

    xhr.onload = function() {
        if (xhr.status == 200) {
            const response = JSON.parse(xhr.responseText);
            const filteredCars = filterCars(response);
            renderCars(filteredCars);
        } else {
            console.error("AJAX hiba: ", xhr.statusText);
        }
    };
    xhr.send();
}

function filterCars(cars) {
    const brand = document.getElementById("carBrand")?.value || "Any";
    const model = document.getElementById("carModel")?.value.toLowerCase() || "";
    const kmFrom = parseInt(document.getElementById("kmFrom")?.value) || 0;
    const kmTo = parseInt(document.getElementById("kmTo")?.value) || Infinity;
    const priceFrom = parseInt(document.getElementById("priceFrom")?.value) || 0;
    const priceTo = parseInt(document.getElementById("priceTo")?.value) || Infinity;
    const transmission = document.getElementById("carTransmission")?.value || "Any";
    const fuel = document.getElementById("carFuel")?.value || "Any";

    return cars.filter(car => {
        return (brand === "Any" || car.márka === brand) &&
               (model === "" || car.modell.toLowerCase().includes(model)) &&
               (car.km >= kmFrom && car.km <= kmTo) &&
               (car.vételár >= priceFrom && car.vételár <= priceTo) &&
               (transmission === "Any" || car.váltó === transmission) &&
               (fuel === "Any" || car.üzemanyag === fuel);
    });
}

function renderCars(cars, currentPage = 1, carsPerPage = 8) {
    const carContainer = document.querySelector(".container-fluid");
    const startIndex = (currentPage - 1) * carsPerPage;
    const endIndex = Math.min(startIndex + carsPerPage, cars.length); 
    const currentCars = cars.slice(startIndex, endIndex);

    carContainer.innerHTML = "";

    currentCars.forEach(function(data) {
        const row = 
        `
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
                <p>Vételár: ${formatter.format(data.vételár)} HUF</p>
            </div>
        </div>
        `;
        carContainer.innerHTML += row;
    });

    updatePagination(cars.length, currentPage, carsPerPage);
}

function updatePagination(totalCars, currentPage, carsPerPage) {
    const totalPages = Math.ceil(totalCars / carsPerPage);
    const paginationContainer = document.querySelector(".pagination");

    paginationContainer.innerHTML = "";

    paginationContainer.innerHTML += `
        <li class="page-item ${currentPage === 1 ? 'disabled' : ''}">
            <a class="page-link" href="#" onclick="changePage(${currentPage - 1}); return false;" tabindex="-1" aria-disabled="true">Prev</a>
        </li>
    `;

    for (let i = 1; i <= totalPages; i++) {
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
}

function changePage(pageNumber) {
    const xhr = new XMLHttpRequest();
    const url = 'json/cars.json';

    xhr.open("GET", url, true);

    xhr.onload = function() {
        if (xhr.status == 200) {
            const response = JSON.parse(xhr.responseText);
            const filteredCars = filterCars(response);
            renderCars(filteredCars, pageNumber);
            window.scrollTo(0, 0);
        } else {
            console.error("AJAX hiba: ", xhr.statusText);
        }
    };
    xhr.send();
}

function fillSelect() {
    const carBrand = document.getElementById("carBrand");
    const xhr = new XMLHttpRequest();
    const url = 'json/cars.json';
    let brands = [];

    xhr.open("GET", url, true);

    xhr.onload = function() {
        if (xhr.status == 200) {
            const response = JSON.parse(xhr.responseText);
            response.forEach(function(data){
                if (!brands.includes(data.márka)) {
                    brands.push(String(data.márka))
                }
            });

            brands.sort().forEach(function(data) {
                const option = `<option value="${data}">${data}</option>`;
                carBrand.innerHTML += option;
            });

        } else {
            console.error("AJAX hiba: ", xhr.statusText);
        }
    }
    xhr.send();
}

function loadCarData() {
    const xhr = new XMLHttpRequest();
    const url = 'json/cars.json';

    xhr.open("GET", url, true);

    xhr.onload = function() {
        if (xhr.status == 200) {
            const response = JSON.parse(xhr.responseText);
            renderCars(response);
        } else {
            console.error("AJAX hiba: ", xhr.statusText);
        }
    };
    xhr.send();
}

fillSelect();