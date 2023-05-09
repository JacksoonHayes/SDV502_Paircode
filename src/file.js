// Function to calculate the volume of a container
function volumeOfContainer(container) {
    container = {
        width: 5,
        length: 5,
        height: 5
    }
    return container.width * container.length * container.height;
}
console.log(volumeOfContainer());
