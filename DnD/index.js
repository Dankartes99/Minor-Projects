var dice = document.querySelectorAll(".inSlot");
var button = document.querySelectorAll(".item");
var reset = document.querySelector(".reset")

button[0].addEventListener("click", () => {
    dice[0].classList.toggle("inSlotShuffle");
    spin = setInterval( () =>{
        dice[0].innerText = Math.floor(Math.random() * 4 +1)
    }, 100);
})

button[1].addEventListener("click", () => {
    dice[1].classList.toggle("inSlotShuffle");
    spin = setInterval( () =>{
        dice[1].innerText = Math.floor(Math.random() * 6 +1)
    }, 100);
})

button[2].addEventListener("click", () => {
    dice[2].classList.toggle("inSlotShuffle");
    spin = setInterval( () =>{
        dice[2].innerText = Math.floor(Math.random() * 8 +1)
    }, 100);
})

button[3].addEventListener("click", () => {
    dice[3].classList.toggle("inSlotShuffle");
    spin = setInterval( () =>{
        dice[3].innerText = Math.floor(Math.random() * 10 +1)
    }, 100);
})

button[4].addEventListener("click", () => {
    dice[4].classList.toggle("inSlotShuffle");
    spin = setInterval( () =>{
        dice[4].innerText = Math.floor(Math.random() * 12 +1)
    }, 100);
})

button[5].addEventListener("click", () => {
    dice[5].classList.toggle("inSlotShuffle");
    spin = setInterval( () =>{
        dice[5].innerText = Math.floor(Math.random() * 20 +1)
    }, 100);
})

reset.addEventListener("click", () => {
    alert("Fuck off");
})