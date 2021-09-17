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

class Person {
    name: string;
    surname: string;
    age: number;
    grades: number[];
    constructor(name: string, surname: string, age: number, grades: number[]) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.grades = grades;
    }
    getTotalNameLength(): number {
        return this.name.length + this.surname.length;
    }
    getGradesAverage(): number {
        let sumOfGrades = 0;
        for (let i = 0; i < this.grades.length; i++) {
            sumOfGrades += this.grades[i];
        }
        return sumOfGrades / this.grades.length;        
    }
}

let people: Person[] = [
    new Person("Mindaugas", "Dovainis", 152, [10, 5, 8]),
    new Person("Jonas", "Petrikas", 123, [8, 7, 9])
]

// ... alternatyvi duomenu reprezentacija kiumpiuteryje:
let mindaugas = { name: "Mindaugas", surname: "Kaubojus", age: 51, grades: [5, 10, 8, 10, 3] }
// resultArea.innerText += "\n" + people[0].name + " " + people[0].surname + " " + people[0].age;
// resultArea.innerText += "\n" + people[1].name + " " + people[1].surname + " " + people[1].age;

let totalAge = 0;
for (let i = 0; i < people.length; i++) {
    totalAge += people[i].age;
}

console.log(`These people have combined ${totalAge} years of life experience, the average age ${totalAge / people.length}`);

people.forEach(person => console.log(person.getGradesAverage()))

// let someVariable: boolean | number;
// someVariable = 13;
// console.log(someVariable.toString())

// let anyType: any;
// anyType = false;
// console.log(anyType.valueOf())