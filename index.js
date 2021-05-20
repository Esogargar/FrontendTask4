// convertFahrToCelsius TASK

const convertFahrToCelsius = (x) => {
    if (typeof x === "boolean") {
        console.log(`[${x}] is not a valid number but a/an ${typeof (x)}.`);
        return `[${x}] is not a valid number but a/an ${typeof (x)}.`;
    }
    else if (typeof x === "number") {
        var value = calcFahrToCelsius(x);
        return value;
    }
    else if (typeof x === "string") {
        var number = parseInt(x);
        if (!isNaN(number) || number == 0) {
            var value1 = calcFahrToCelsius(number);
            return value1;
        }
        else if (isNaN(number)) {
            var value = JSON.stringify(x);
            console.log(`'${value} is not a valid number but a/an ${typeof (x)}.'`);
            return `'${value} is not a valid number but a/an ${typeof (x)}.'`
        }
    }
    else if (Array.isArray(x)) {
        console.log(`'[${x}] is not a valid number but a/an array.'`);
        return `'[${x}] is not a valid number but a/an array.'`
    }
    else {
        var value = JSON.stringify(x);
        console.log(`'${value} is not a valid number but a/an ${typeof (x)}.'`);
        return `'${value} is not a valid number but a/an ${typeof (x)}.'`;
    }
};
// function to convert Fahr to Celsius
function calcFahrToCelsius(n) {
    //1F = 1.8C + 32 (e.g 0deg C = 32deg F)
    var Fahr = ((n - 32) / 1.8);
    var fahrDec = parseFloat(Fahr.toFixed(4));
    console.log(`'${fahrDec}'`);
    return `${fahrDec}`
}


//check
convertFahrToCelsius(0)
convertFahrToCelsius("0")
convertFahrToCelsius([1, 2, 3])
convertFahrToCelsius({ temp: 0 })


// 2. Write a function named "checkYuGiOh" that takes a number, n, as an argument, creates an array of numbers from 1 to n and replaces factors of 2, 3, and 5 with "yu", "gi" and "oh", logs the resulting array to the console then returns the resulting array.

const checkYuGiOh = (n) => {
    if (typeof n !== "number") return `invalid parameter: ${n}`;
    const numArr = [...Array(n).keys()].map(number => number + 1);
    const x = numArr.map(number => {
        let answer = "";
        if (number % 2 === 0) {
            answer = "yu";
        }
        if (number % 3 === 0) {
            answer = (answer.length >= 2) ? `${answer}-gi` : "gi";
        }
        if (number % 5 === 0) {
            answer = (answer.length >= 2) ? `${answer}-oh` : "oh";
        }
        return (answer.length < 2) ? number : answer;
    });
    return x;
}

console.log(checkYuGiOh(10))
console.log(checkYuGiOh(5))
console.log(checkYuGiOh("fizzbuzz is meh"))
