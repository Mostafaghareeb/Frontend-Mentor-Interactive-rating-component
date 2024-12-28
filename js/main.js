// btn onclick add active class and remove from any btn another
// submit onclick container display none  thanks-container displau block
// save number of btn and add it in span

let container = document.querySelector(".container");
let thanksContainer = document.querySelector(".thanks-container");
let btns = document.querySelectorAll(".rating-btns button");
let submitBtn = document.querySelector(".submit-btn");
let selected = document.querySelector(".selected");
let selectedNum = 0;

btns.forEach((e) => {
    e.onclick = () => {
        removeActive();
        e.className = "active";
        selectedNum = e.value 
    };
});

submitBtn.onclick = function () {
    if (selectedNum !== 0) {
        container.style.display = "none"
        thanksContainer.style.display = "block"
        selected.innerHTML = selectedNum
    };
}

function removeActive() {
    btns.forEach((e) => {
        e.classList.remove("active")
    });
}