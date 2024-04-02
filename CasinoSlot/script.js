const values = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
var slotvalue = document.querySelectorAll(".value");
const button = document.querySelector(".btn");
document.querySelector("h1").innerText = "Press SPIN to play!";
button.addEventListener("click", () => {
    startSlot();
});

function startSlot(){
    for(var i=0; i<3; i++){
        slotvalue[i].classList.add("valuespin");
    }
    spin = setInterval(function(){
        for(var i=0; i<3; i++){
            slotvalue[i].innerText = values[Math.floor(Math.random() * 10)];
        }
    }, 100);

    setTimeout(function(){
        for(var i=0; i<3; i++){
            slotvalue[i].classList.remove("valuespin");
        }
        if(slotvalue[0].innerText == slotvalue[1].innerText && slotvalue[1].innerText == slotvalue[2].innerText){
            document.querySelector("h1").innerText = "Congratulations! You Win!";
        }
        else{
            document.querySelector("h1").innerText = "Please Try Again";
        }
        clearInterval(spin);
    }, 1000);
}