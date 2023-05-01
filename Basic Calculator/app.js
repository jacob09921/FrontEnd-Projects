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
            setTimeout(() => {
                if (final === 0) {
                    result2 = result
                    operator.push('/')
                    final = 1
                    attempt++
                } else if (final === 1) {
                    list.push(result)
                    operator.push('/')
                    attempt++
                }
            }, 100)
            display.innerHTML = '/'
            btn.disabled = true;
            plus.disabled = true;
            minus.disabled = true;
            times.disabled = true
            equal.disabled = true;
            num = ''
            numEnabled()
        })
    }
    else if (btn.innerHTML === '7') {
        btn.addEventListener('click', () => {
            disabled()
            display.innerHTML = num += 7
            result = parseFloat(num)
        })

    }
    else if (btn.innerHTML === '8') {
        btn.addEventListener('click', () => {
            disabled()
            display.innerHTML = num += 8
            result = parseFloat(num)
        })

    }
    else if (btn.innerHTML === '9') {
        btn.addEventListener('click', () => {
            disabled()
            display.innerHTML = num += 9
            result = parseFloat(num)
        })

    }
    else if (btn.innerHTML === 'x') {
        btn.addEventListener('click', () => {
            setTimeout(() => {
                if (final === 0) {
                    result2 = result
                    final = 1
                    attempt++
                    operator.push('x')
                } else if (final === 1) {
                    list.push(result)
                    operator.push('x')
                    attempt++
                }
            }, 100)
            display.innerHTML = 'x'
            btn.disabled = true;
            divided.disabled = true;
            plus.disabled = true
            minus.disabled = true
            equal.disabled = true;
            num = ''
            numEnabled()

        })

    }
    else if (btn.innerHTML === '4') {
        btn.addEventListener('click', () => {
            disabled()
            display.innerHTML = num += 4
            result = parseFloat(num)
        })

    }
    else if (btn.innerHTML === '5') {
        btn.addEventListener('click', () => {
            disabled()
            display.innerHTML = num += 5
            result = parseFloat(num)



        })

    }
    else if (btn.innerHTML === '6') {
        btn.addEventListener('click', () => {
            disabled()
            display.innerHTML = num += 6
            result = parseFloat(num)
        })

    }
    else if (btn.innerHTML === '-') {
        btn.addEventListener('click', () => {
            setTimeout(() => {
                if (final === 0) {
                    result2 = result
                    operator.push('-')
                    final = 1
                    attempt++
                } else if (final === 1) {
                    list.push(result)
                    operator.push('-')
                    attempt++
                }
            }, 100)
            display.innerHTML = '-'
            btn.disabled = true;
            times.disabled = true;
            divided.disabled = true
            plus.disabled = true;
            equal.disabled = true;
            num = ''
            numEnabled()




        })

    }
    else if (btn.innerHTML === '1') {
        btn.addEventListener('click', () => {
            disabled()
            display.innerHTML = num += 1
            result = parseFloat(num)

        })

    }
    else if (btn.innerHTML === '2') {
        btn.addEventListener('click', () => {
            disabled()
            display.innerHTML = num += 2
            result = parseFloat(num)

        })

    }
    else if (btn.innerHTML === '3') {
        btn.addEventListener('click', () => {
            disabled()
            display.innerHTML = num += 3
            result = parseFloat(num)

        })

    }
    else if (btn.innerHTML === '+') {
        btn.addEventListener('click', () => {
            setTimeout(() => {
                if (final === 0) {
                    result2 = result
                    operator.push('+')
                    final = 1
                    attempt++
                } else if (final === 1) {
                    list.push(result)
                    operator.push('+')
                    attempt++
                }
            }, 100)
            display.innerHTML = '+'
            btn.disabled = true;
            minus.disabled = true
            divided.disabled = true
            times.disabled = true
            equal.disabled = true;
            num = ''
            numEnabled()


        })

    }

    else if (btn.innerHTML === '0') {
        btn.addEventListener('click', () => {
            disabled()
            display.innerHTML = num += 0
            result = parseFloat(num)
        })

    }
    else if (btn.innerHTML === '.') {
        btn.addEventListener('click', () => {
            disabled()
            display.innerHTML = num += '.'
            result = parseFloat(num)
        })

    }
    else if (btn.innerHTML === '=') {
        btn.addEventListener('click', () => {
            disabled()
            list.unshift(result)
            if (final === 0) {
                if (isNaN(result)) {
                    display.innerHTML = 'UNDEFINED'
                    operatorDisabled()
                }
                else
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
                if (isNaN(result)) {
                    display.innerHTML = 'UNDEFINED'
                    operatorDisabled()
                } else
                    display.innerHTML = parseFloat(num)

            }
            del.disabled = true;
            numDisabled()
        })

    }
    else if (btn.innerHTML === 'Delete') {
        btn.addEventListener('click', () => {
            display.innerHTML = num.replace(num[num.length - 1], '')
            num = display.innerHTML
            result = parseFloat(num)
            if (num.length === 1) {
                btn.disabled = true;
            }

        })
    }

}





// functions that aims to disabled certain buttons

function disabled() {
    for (let btn of buttons) {
        btn.disabled = false;
    }
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
        if (btn.innerHTML === '7') {
            btn.disabled = true;
        } else if (btn.innerHTML === '8') {
            btn.disabled = true;
        }
        else if (btn.innerHTML === '9') {
            btn.disabled = true;
        }
        else if (btn.innerHTML === '6') {
            btn.disabled = true;
        }
        else if (btn.innerHTML === '5') {
            btn.disabled = true;
        }
        else if (btn.innerHTML === '4') {
            btn.disabled = true;
        }
        else if (btn.innerHTML === '1') {
            btn.disabled = true;
        }
        else if (btn.innerHTML === '2') {
            btn.disabled = true;
        }
        else if (btn.innerHTML === '3') {
            btn.disabled = true;
        }
        else if (btn.innerHTML === '0') {
            btn.disabled = true;
        }
        else if (btn.innerHTML === '.') {
            btn.disabled = true;
        }

    }
}



function numEnabled() {
    for (let btn of buttons) {
        if (btn.innerHTML === '7') {
            btn.disabled = false;
        } else if (btn.innerHTML === '8') {
            btn.disabled = false;
        }
        else if (btn.innerHTML === '9') {
            btn.disabled = false
        }
        else if (btn.innerHTML === '6') {
            btn.disabled = false
        }
        else if (btn.innerHTML === '5') {
            btn.disabled = false
        }
        else if (btn.innerHTML === '4') {
            btn.disabled = false
        }
        else if (btn.innerHTML === '1') {
            btn.disabled = false
        }
        else if (btn.innerHTML === '2') {
            btn.disabled = false
        }
        else if (btn.innerHTML === '3') {
            btn.disabled = false
        }
        else if (btn.innerHTML === '0') {
            btn.disabled = false
        }
        else if (btn.innerHTML === '.') {
            btn.disabled = false
        }

    }
}