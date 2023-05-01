// create multiple objects from html 
const display = document.querySelector('#numPage')
const div = document.querySelector('#buttons')
const buttons = document.querySelectorAll('button')
const plus = document.querySelector('#plus')
const divided = document.querySelector('#divide')
const times = document.querySelector('#times')
const minus = document.querySelector('#minus')
const del = document.querySelector('#delete')
const equal = document.querySelector('#equal')
operatorDisabled() // it disabled all the operator 
let num = ''
let result = 0 // initiate the containment of first save of number
let result2 = 0 // the container for result and the final output of the calculator
let list = [] // absorber of all numbers that are submitted
let operator = [] // absorber of what kind of operator that it used to a certain equation
let final = 0 // creating condition when initiating first save number
let attempt = 0 // attempts of loop when you creating an equation


// accessing all the buttons controls
// with certain conditions
for (let btn of buttons) {
    if (btn.innerHTML === 'Clear') {
        btn.addEventListener('click', () => {
            display.innerHTML = ''
            disabled()
            num = ''
            result = 0
            result2 = 0
            final = 0
            attempt = 0
            operatorDisabled()
        })
    }
    else if (btn.innerHTML === '/') {
        btn.addEventListener('click', () => {
            operatorAbilities('/')
        })
    }
    else if (btn.innerHTML === '7') {
        btn.addEventListener('click', () => {
            abilities(7)
        })

    }
    else if (btn.innerHTML === '8') {
        btn.addEventListener('click', () => {
            abilities(8)
        })

    }
    else if (btn.innerHTML === '9') {
        btn.addEventListener('click', () => {
            abilities(9)
        })

    }
    else if (btn.innerHTML === 'x') {
        btn.addEventListener('click', () => {
            operatorAbilities('x')
        })

    }
    else if (btn.innerHTML === '4') {
        btn.addEventListener('click', () => {
            abilities(4)
        })

    }
    else if (btn.innerHTML === '5') {
        btn.addEventListener('click', () => {
            abilities(5)
        })

    }
    else if (btn.innerHTML === '6') {
        btn.addEventListener('click', () => {
            abilities(6)
        })

    }
    else if (btn.innerHTML === '-') {
        btn.addEventListener('click', () => {
            operatorAbilities('-')
        })

    }
    else if (btn.innerHTML === '1') {
        btn.addEventListener('click', () => {
            abilities(1)
        })

    }
    else if (btn.innerHTML === '2') {
        btn.addEventListener('click', () => {
            abilities(2)
        })

    }
    else if (btn.innerHTML === '3') {
        btn.addEventListener('click', () => {
            abilities(3)
        })
    }
    else if (btn.innerHTML === '+') {
        btn.addEventListener('click', () => {
            operatorAbilities('+')
        }
        )
    }

    else if (btn.innerHTML === '0') {
        btn.addEventListener('click', () => {
            abilities(0)
        })

    }
    else if (btn.innerHTML === '.') {
        btn.addEventListener('click', () => {
            disabled()
            if (num.length === 0) {
                display.innerHTML = num += '0.'
                result = parseFloat(num)
            } else {
                display.innerHTML = num += '.'
                result = parseFloat(num)
            }
            delDisabled()
        })

    }
    else if (btn.innerHTML === '=') {
        btn.addEventListener('click', () => {
            disabled()
            list.unshift(result)
            if (final === 0) {
                display.innerHTML = result
            }

            else {
                for (let i = 0; i < attempt; i++) {
                    if (operator[i] === '/') {
                        result2 = result2 / list[i]
                    } else if (operator[i] === 'x') {
                        result2 = result2 * list[i]
                    }
                    else if (operator[i] === '+') {
                        result2 = result2 + list[i]
                    }
                    else if (operator[i] === '-') {
                        result2 = result2 - list[i]

                    }
                }
                list = []
                operator = []
                num = result2.toString()
                display.innerHTML = parseFloat(num)
            }
            del.disabled = true;
            numDisabled()
        })

    }
    else if (btn.innerHTML === 'Delete') {
        btn.addEventListener('click', () => {
            display.innerHTML = num.slice(0, -1);
            num = display.innerHTML
            result = parseFloat(num)
            if (num.length === 1) {
                btn.disabled = true;
            }
            if (num.length < 15) {
                numEnabled()
            }
        })
    }
}
function abilities(param) {
    disabled()
    display.innerHTML = num += param
    result = parseFloat(num)
    delDisabled()
    length()
}
// functions that aims to disabled certain buttons
function length() {
    if (num.length === 15) {
        numDisabled()
    }
}
function disabled() {
    for (let btn of buttons) {
        btn.disabled = false;
    }
}
function delDisabled() {
    if (num.length == 1)
        del.disabled = true;
}

function operatorDisabled() {
    minus.disabled = true
    divided.disabled = true
    times.disabled = true
    plus.disabled = true
    equal.disabled = true;
}
function numDisabled() {
    for (let btn of buttons) {
        if (btn.innerHTML === '7' || btn.innerHTML === '8' || btn.innerHTML === '9' || btn.innerHTML === '6'
            || btn.innerHTML === '4' || btn.innerHTML === '5' || btn.innerHTML === '3' || btn.innerHTML === '2'
            || btn.innerHTML === '1' || btn.innerHTML === '0' || btn.innerHTML === '.') {
            btn.disabled = true;
        }
    }
}
function numEnabled() {
    for (let btn of buttons) {
        if (btn.innerHTML === '7' || btn.innerHTML === '8' || btn.innerHTML === '9' || btn.innerHTML === '6'
            || btn.innerHTML === '4' || btn.innerHTML === '5' || btn.innerHTML === '3' || btn.innerHTML === '2'
            || btn.innerHTML === '1' || btn.innerHTML === '0' || btn.innerHTML === '.') {
            btn.disabled = false;
        }
    }
}

function operatorAbilities(param) {
    setTimeout(() => {
        if (final === 0) {
            result2 = result
            operator.push(param)
            final = 1
            attempt++
        } else if (final === 1) {
            list.push(result)
            operator.push(param)
            attempt++
        }
    }, 100)
    display.innerHTML = param
    plus.disabled = true;
    minus.disabled = true
    divided.disabled = true
    times.disabled = true
    equal.disabled = true;
    del.disabled = true;
    num = ''
    numEnabled()
}
