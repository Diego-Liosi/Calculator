let num = document.getElementById('display');
let prevnum = '';
let operation = '';

const click1 = () => { num.value = num.value + 1 }
const click2 = () => { num.value = num.value + 2 }
const click3 = () => { num.value = num.value + 3 }
const click4 = () => { num.value = num.value + 4 }
const click5 = () => { num.value = num.value + 5 }
const click6 = () => { num.value = num.value + 6 }
const click7 = () => { num.value = num.value + 7 }
const click8 = () => { num.value = num.value + 8 }
const click9 = () => { num.value = num.value + 9 }
const click0 = () => { num.value = num.value + 0 }

const clickclear = () => { num.value = '' } // Clear the display

const clicksum = () => {                    // Arrow function for sum
    prevnum = num.value;
    operation = 'sum';
    num.value = '';
}

const clicksubtract = () => {               // Arrow function for subtract
    prevnum = num.value;
    operation = 'subtract';
    num.value = '';
}

const clickmultiply = () => {              // Arrow function for multiply
    prevnum = num.value;
    operation = 'multiply';
    num.value = '';
}

const clickdivide = () => {               // Arrow function for divide
    prevnum = num.value;
    operation = 'divide';
    num.value = '';
}

const clickequal = () => {                  // Arrow function for equal
    if (operation === 'sum') {
        num.value = parseFloat(prevnum) + parseFloat(num.value);
    }
    else if (operation === 'subtract') {
        num.value = parseFloat(prevnum) - parseFloat(num.value);
    }
    else if (operation === 'multiply') {
        num.value = parseFloat(prevnum) * parseFloat(num.value);
    }
    else if (operation === 'divide') {
        num.value = parseFloat(prevnum) / parseFloat(num.value);
    }
    else {
        console.log('vacio');
    }
}