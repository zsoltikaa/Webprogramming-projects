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