// 1. doboz
let isBlurred = false;
let elementOne = document.getElementById("element-one");

elementOne.onclick = function() 
{
    isBlurred = !isBlurred;
    if (isBlurred) 
    {
        elementOne.classList.add("blur");
    }
    else 
    {
        elementOne.classList.remove("blur");
    }
}

// 2. doboz
let elementTwo = document.getElementById("element-two");

elementTwo.onmouseover = function()
{
    elementTwo.style.backgroundColor = "red";
}

elementTwo.onmouseout = function()
{
    elementTwo.style.backgroundColor = "#299b2e";
}

// 3. doboz
let elementThree = document.getElementById("element-three");

function getRandom(min, max)
{
    return Math.round(Math.round() * (max-min) + min);
}

elementThree.ondblclick = function()
{
    elementThree.firstElementChild.innerHTML = getRandom(1, 90);
}

// 4. doboz
let elementFour = document.getElementById("element-four");

elementFour.onclick = function()
{
    elementFour.classList.add("hidden");
    setTimeout(function() 
    {
        elementFour.classList.remove("hidden");
    }, 1000)
}

// 5. doboz
let isRound = false;

document.getElementById("element-five").onclick = function()
{
    if (isRound = !isRound)
    {
        let boxes = document.querySelectorAll(".shape")
        for (const item of boxes) 
        {
            item.style.borderRadius = "50%";
        }
    }
        else 
        {
            let boxes = document.querySelectorAll(".shape")
            for (const item of boxes) 
            {
                item.style.borderRadius = "3px";
            }
        }
}

//. 6. doboz
let elementSix = document.getElementById("element-six");

elementSix.onsubmit = function(event)
{
    event.preventDefault()
    let elementSixInput = event.target.elements.boxNumber.value;
    elementSix.firstElementChild.innerHTML = elementSixInput;
}

// 7. doboz
let elementSeven = document.getElementById("element-seven");

elementSeven.onkeyup = function(event) 
{
    elementSeven.firstElementChild.innerHTML = event.key;       
}

// 8. doboz 
let elementEight = document.getElementById("element-eight");

document.onmousemove = function(event) 
{
    let coordinates = "X: " + event.clientX + "<br>Y: " + event.clientY;
    elementEight.firstElementChild.innerHTML = coordinates;
}

// 9. doboz
let elementNine = document.getElementById("element-nine");

elementNine.onclick = function()
{
    elementNine.innerHTML = '<img src="0f2f2433d014c0008ca84d725aa5409c.jpg">'
}