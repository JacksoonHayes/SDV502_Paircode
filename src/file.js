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
object = {
    name: "John",
    age: 30,
    city: "New York"
}
function convertObjectToArray() {
    return Object.entries(object);
}
console.log(convertObjectToArray());
