const button = document.getElementById("addition_button");
const input1 = document.getElementById("n1");
const input2 = document.getElementById("n2");
const resultArea = document.getElementById("result_area");

const add = (n1, n2) => n1 + n2;

button.addEventListener("click", () => {
    resultArea.innerText = "| Result: ";
    resultArea.innerText += add(parseInt(input1.value), parseInt(input2.value));
})