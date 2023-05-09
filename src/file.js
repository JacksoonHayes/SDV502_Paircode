// Function to calculate the volume of a container
// function volumeOfContainer() {
//     container = {
//         width: 5,
//         length: 5,
//         height: 5
//     }
//     return container.width * container.length * container.height;
// }
// console.log(volumeOfContainer());


//Function to convert all properties in an object into an array
// object = {
//     name: "John",
//     age: 30,
//     city: "New York"
// }
// function convertObjectToArray() {
//     return Object.entries(object);
// }
// console.log(convertObjectToArray());


// function to convert a string to the number of letters and numbers and put them into an object
// object = {
//     letters: 0, 
//     numbers: 0
// };
// let string = "Hello World 2023";
// let stringRegex = /\w/g;
// let result = string.match(stringRegex);
// for (let i = 0; i < result.length; i++) {
//     if (result[i] >= 0) {
//         object.numbers++;
//     } else {
//         object.letters++;
//     }
// }
// console.log(object);


//Same function but using a for loop and Number isNaN() method
function convertString(str) {
    let letters = [];
    let numbers = [];
    const filter = str.split("").filter(item => item != " ");

    for (let i = 0; i < filter.length; i++) {
        if (isNaN(filter[i])) {
            letters.push(filter[i]);
        } else {
            numbers.push(filter[i]);
        }
    }
    let result = {
        letters: letters.length,
        numbers: numbers.length
    }
    return result;
}
console.log(convertString("Hello World 2023"));
