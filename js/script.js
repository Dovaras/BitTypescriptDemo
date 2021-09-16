var button = document.getElementById("addition_button");
var input1 = document.getElementById("n1");
var input2 = document.getElementById("n2");
var resultArea = document.getElementById("result_area");
var add = function (n1, n2) {
    return typeof n1 === 'number' && typeof n2 === 'number' ? n1 + n2 : +n1 + +n2;
};
button.addEventListener("click", function () {
    resultArea.innerText = "| Result: ";
    resultArea.innerText += add(+input1.value, +input2.value);
});
// class Person(name0: string) {
//     this.name0;
//     constructor(name0) {
//         this.name0 = name0;
//     }
// }
var someVariable;
someVariable = 13;
console.log(someVariable.toString());
var anyType;
anyType = true;
console.log(anyType.valueOf());
