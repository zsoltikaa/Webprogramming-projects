// 1. doboz
let elementNine = document.getElementById("element-one");

elementNine.onclick = function()
{
    elementNine.innerHTML = '<img src="0f2f2433d014c0008ca84d725aa5409c.jpg">'
}

// 2. doboz
let isRound = false;

document.getElementById("element-two").onmouseover = function()
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

// 3. doboz
elementThree = document.getElementById("element-three");

elementThree.ondblclick = function()
{
    elementThree.style.backgroundColor = "green";
}