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

// console.log(convertArray(object));


// numbers and letters
string = "Hello World 2023";

function numAndLetters(str) {
    let nums = 0;
    let letters = 0;

    for (let i = 0; i <str.length; i++) {
        if (str[i] >= "0" && str[i] <= "9") {
            nums++;
        } else if (str[i] !== " ") {
            letters++;
        }
    }
    return `Numbers: ${nums}, Letters: ${letters}`;
}
console.log(numAndLetters(string));


