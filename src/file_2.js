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
object = {letters: 0, numbers: 0};
string = "Hello World 2023";

function numAndLetters(str) {
    for (let i = 0; i <str.length; i++) {
        if (str[i] >= "0" && str[i] <= "9") {
            object.numbers++;
        } else if (str[i] !== " ") {
            object.letters++;
        }
    }
    return object;
}
// console.log(numAndLetters(string));


// numbers and letters with regex
function numAndLettersRegex(str) {
    let ren = /0-9/;
    let rel = /\w/;

    for (let i = 0; i <str.length; i++) {
        if (str.test(ren)) {
            object.numbers++;
        } else if (str.test(rel)) {
            object.letters++;
        }
    }
    return object;
}
// console.log(numAndLetters(string));


// numbers and letters with split and filter
function NumbersAndLetters(str) {
    let letters = []
    let numbers = []
    const filterStr = str.split('').filter(item => item != ' ');
    console.log(filterStr);
    for (let i = 0; i < filterStr.length; i++) {
        if (isNaN(filterStr[i])) {
            letters.push(filterStr[i]);
        } else {
            numbers.push(filterStr[i]);
        }
    }
    let finalCount = {
        "letters": letters.length,
        "numbers": numbers.length
    }
    return finalCount;
}
string_2 = "Hello World 2023";
console.log(NumbersAndLetters(string_2));


