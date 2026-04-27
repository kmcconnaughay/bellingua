const button = document.getElementById("increment");
const count = document.getElementById("count");

let i = 0;

button.addEventListener("click", function (event) {
    i++;
    count.textContent = i;
});