const button = document.getElementById("addition_button");
const input1 = document.getElementById("n1") as HTMLInputElement;
const input2 = document.getElementById("n2") as HTMLInputElement;
const resultArea = document.getElementById("result_area");

const add = (n1: number, n2: number): number => {
    return typeof n1 === 'number' && typeof n2 === 'number' ? n1 + n2 : +n1 + +n2;
}

button.addEventListener("click", () => {
    resultArea.innerText = "| Result: ";
    resultArea.innerText += add(+input1.value, +input2.value);
});

// class Person(name0: string) {
//     this.name0;
//     constructor(name0) {
//         this.name0 = name0;
//     }
// }

let someVariable: boolean | number;
someVariable = 13;
console.log(someVariable.toString())

let anyType: any;
anyType = false;
console.log(anyType.valueOf())