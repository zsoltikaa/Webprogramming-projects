const formatter = new Intl.NumberFormat("en-US", {
    style: "currency", 
    currency: "HUF",
    maximumFractionDigits: 0,
});

const xhr = new XMLHttpRequest();
const url = 'cars.json';

xhr.open("GET", url, true);

xhr.onload = function() {
    if (xhr.status == 200) {       
        const response = JSON.parse(xhr.responseText);     
        renderCars(response);
    } else {
        console.error("AJAX hiba: ", xhr.statusText);
    }
}

function renderCars(response) {
    const carContainer = document.querySelector(".container-fluid");

    response.forEach(function(data) { 
        const row = 
        `
        <div class="row">
            <div class="col-3">
            <img src="${data.url}" alt="">
            </div>
            <div class="col-3 d-flex flex-column justify-content-center align-items-center">
                <p>${data.márka} ${data.modell} ${data.típusjel}</p>
                <p>Évjárat: ${data.évjárat}</p>
                <p>Kivitel: ${data.kivitel}</p>
                <p>Állapot: ${data.állapot}</p>
            </div>
            <div class="col-3 d-flex flex-column justify-content-center align-items-center">
                <p>Teljesítmény: ${data.teljesítmény} LE</p>
                <p>Hengerűrtartalom: ${data.hengerűrtartalom} cc</p>
                <p>Váltó típusa: ${data.váltó_típusa}</p>
                <p>Üzemanyag: ${data.üzemanyag_típus}</p>
            </div>
            <div class="col-3 d-flex flex-column justify-content-center align-items-center">
                <p>Km óra állása: ${data.km} Km</p>
                <p>Érvényes magyar forgalmi: ${data.okmanyok ? "Igen" : "Nem"}</p>
                <p>Elérhetőség: ${data.elérhetőség}</p>
                <p>Vételár: ${formatter.format(data.vételár)} HUF</p>
            </div>
        </div>
        `;
        carContainer.innerHTML += row;
    });
}

xhr.send();
