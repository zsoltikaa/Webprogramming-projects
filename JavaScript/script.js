console.log('JS file attached! ')

// fuggveny letrehozasa
function teszt() 
{
    let cim = document.getElementById('cim');
    console.log(cim);
    cim.innerHTML = "Másik cím";
}

teszt();

// valtozok deklaralasa es inicializioja
let x = 5;
let y = 5;
let z = x + y;

console.log(z);

let vezeteknev = "Kalányos";
let keresztnev = "Nintendo";

console.log("Az inas neve" + " " + vezeteknev + " " + keresztnev); 