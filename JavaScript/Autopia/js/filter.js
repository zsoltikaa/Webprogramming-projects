const filterMenu = document.querySelector(".filterMenu");

let toggle = false;

function toggleFilters() {
    toggle = !toggle;
    if (toggle) {
        filterMenu.style.display = "block";
    }
    else {
        filterMenu.style.display = "none";
    }
}