//1
const fruits = ["apple", "banana", "orange", "grape", "mango"];
fruits.push("pineapple");
fruits.unshift("kiwi");

//2
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);

//3
const selectedFruits = fruits.slice(1, 4);
console.log(selectedFruits);
console.log("------------------------------------");

//4
const grapeIndex = fruits.indexOf("grape");
console.log(grapeIndex);
console.log("------------------------------------");

//5
const fruitString = fruits.join(", ");
const fruitsFromString = fruitString.split(", ");
console.log(fruitString);
console.log(fruitsFromString);
console.log("------------------------------------");

//6
const reversedFruits = fruits.reverse();
console.log(reversedFruits);
console.log("------------------------------------");

//7
fruits.sort();
console.log(fruits);
console.log("------------------------------------");

//8
const email = "john.doe@example.com";
const emailParts = email.split("@");
//question doesn't say to print anything

//9
const temperatures = [72, 85, 90, 65, 75, 88];
let highestTemperature = 0;
temperatures.forEach(function (temperature) {
  if (temperature > highestTemperature) {
    highestTemperature = temperature;
  }
});
console.log(highestTemperature);
console.log("------------------------------------");

//10
const names = ["Alice", "Bob", "Charlie", "David", "Eva"];
names.forEach(function (name) {
  console.log(`${name} is at index ${names.indexOf(name)}`);
});
