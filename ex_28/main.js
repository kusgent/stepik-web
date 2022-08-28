let myName = "Ilya";
// alert(myName)
console.log(myName);
myName = "Petya";
console.log(myName);
alert(`My name is ${myName}`);

function myFunction1() {
    alert("Вы нажали на кнопку!");
}

function myFunction2(departure, arrival) {
    console.log(`From ${departure} to ${arrival}`);
}

function myFunction3(num1, num2) {
    console.log("Ответ:", (num1+num2) * 2);
}

result = prompt("How old are you?", 18);
console.log(result);

result = confirm("Согласны с правилами?");
console.log(result);