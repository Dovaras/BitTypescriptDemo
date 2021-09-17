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
var Person = /** @class */ (function () {
    function Person(name, surname, age, grades) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.grades = grades;
    }
    Person.prototype.getTotalNameLength = function () {
        return this.name.length + this.surname.length;
    };
    Person.prototype.getGradesAverage = function () {
        var sumOfGrades = 0;
        for (var i = 0; i < this.grades.length; i++) {
            sumOfGrades += this.grades[i];
        }
        return sumOfGrades / this.grades.length;
    };
    return Person;
}());
var people = [
    new Person("Mindaugas", "Dovainis", 152, [10, 5, 8]),
    new Person("Jonas", "Petrikas", 123, [8, 7, 9])
];
// ... alternatyvi duomenu reprezentacija kiumpiuteryje:
var mindaugas = { name: "Mindaugas", surname: "Kaubojus", age: 51, grades: [5, 10, 8, 10, 3] };
// resultArea.innerText += "\n" + people[0].name + " " + people[0].surname + " " + people[0].age;
// resultArea.innerText += "\n" + people[1].name + " " + people[1].surname + " " + people[1].age;
var totalAge = 0;
for (var i = 0; i < people.length; i++) {
    totalAge += people[i].age;
}
console.log("These people have combined " + totalAge + " years of life experience, the average age " + totalAge / people.length);
people.forEach(function (person) { return console.log(person.getGradesAverage()); });
var someVariable;
someVariable = 13;
console.log(someVariable.toString());
var anyType;
anyType = false;
console.log(anyType.valueOf());
