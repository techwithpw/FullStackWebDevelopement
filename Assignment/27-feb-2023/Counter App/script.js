// getting HTML elements

const displayValue = document.getElementById("display");
const incrementBtn = document.getElementById("increment")
const decrementBtn = document.getElementById("decrement")
const resetBtn = document.getElementById("reset")

let val = 0;

// for decrement button event
decrementBtn.addEventListener("click", () => {
    val--;
    displayValue.innerText = val;
})

// for increment button event
incrementBtn.addEventListener("click", () => {
    val++;
    displayValue.innerText = val;
})

// for reset button event

resetBtn.addEventListener("click", () => {
    val = 0
    displayValue.innerText = val;
})




