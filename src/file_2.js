// Jayden's versions


// original volume calculation
container = {width: 5, height: 5, length: 5};

function calcVolume(cont) {
    return cont.width * cont.height * cont.length;
}

// console.log(calcVolume(container));


// nested properties version
container = {
    dimensions: {width: 5, height: 5, length: 5}
};

function calcVolume2(dim) {
    return dim.width * dim.height * dim.length;
}

// console.log(calcVolume2(container.dimensions));


// convertArray
object = {a: 1, b: 2, c: 3};

function convertArray(obj) {
    return Object.entries(obj);
}

console.log(convertArray(object));
