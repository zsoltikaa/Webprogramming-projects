function calculateQuote() {
    let wallLength = parseFloat(document.getElementById('wallLength').value);
    let wallHeight = parseFloat(document.getElementById('wallHeight').value);
    let windowLength1 = parseFloat(document.getElementById('windowLength1').value);
    let windowHeight1 = parseFloat(document.getElementById('windowHeight1').value);
    let windowLength2 = parseFloat(document.getElementById('windowLength2').value);
    let windowHeight2 = parseFloat(document.getElementById('windowHeight2').value);
    let doorLength = parseFloat(document.getElementById('doorLength').value);
    let doorHeight = parseFloat(document.getElementById('doorHeight').value);


    if (isNaN(wallLength) || isNaN(windowLength1) || isNaN(windowLength2) || isNaN(doorLength)) {
        alert('Kérlek, add meg minden értéket!');
        return;
    }

    let wallArea = wallHeight * wallLength;
    let windowArea1 = windowHeight1 * windowLength1;
    let windowArea2 = windowHeight2 * windowLength2;
    let doorArea = doorHeight * doorLength;
    let totalArea = wallArea - (windowArea1 + windowArea2) - doorArea;

    if (totalArea <= 0) {
        alert('A festendő felület nem lehet negatív vagy nulla! Kérlek, ellenőrizd a megadott méreteket.');
        return;
    }

    let paintPricePerSquareMeter = 2000; // Festék ára négyzetméterenként (forintban)
    let wallpaperPricePerSquareMeter = 6300; // Tapéta ára négyzetméterenként (forintban)
    let paintCoatingPricePerSquareMeter = 1500; // Máz ára négyzetméterenként (forintban)

    let paintCost = totalArea * paintPricePerSquareMeter;
    let wallpaperCost = totalArea * wallpaperPricePerSquareMeter;
    let coatingCost = totalArea * paintCoatingPricePerSquareMeter;

    let result = "Árajánlat:<br>";
    result += "Festés: " + paintCost.toLocaleString('hu-HU') + " Ft<br>";
    result += "Tapétázás: " + wallpaperCost.toLocaleString('hu-HU') + " Ft<br>";
    result += "Mázolás: " + coatingCost.toLocaleString('hu-HU') + " Ft<br>";

    document.getElementById('result').innerHTML = result;
}
